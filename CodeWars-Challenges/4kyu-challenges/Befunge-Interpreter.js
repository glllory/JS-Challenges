// Befunge Interpreter

function interpret(code) {
    let output = "";
    let Code_Instructions = code.split('\n').map((i) => { return i.split(''); });
    let Stack = [];
    let X = 0;
    let Y = 0;
    let MoveDirection = '>';
    let Current_Instruction;
    // TODO: Interpret the code!

    // Instructions Functions 
    var MoveRight = () => {
        if (X < Code_Instructions[Y].length - 1) {
            X++;
        } else {
            Y++;
            X = 0;
        }
    }
    var MoveLeft = () => {
        if (X > 0) {
            X--;
        } else {
            Y++;
            X = Code_Instructions[Y].length - 1;
        }
    }
    var MoveDown = () => {
        if (Y < Code_Instructions.length - 1) {
            Y++;
        } else {
            Y = 0;
            X++;
        }
    }
    var MoveUp = () => {
        if (Y > 0) {
            Y--;
        } else {
            Y = Code_Instructions.length - 1;
            X = X++;
        }
    }
    var MoveToNext = () => {
        switch (MoveDirection) {
            case '>':
                MoveRight();
                break;
            case '<':
                MoveLeft();
                break;
            case 'v':
                MoveDown();
                break;
            case '^':
                MoveUp();
                break;
        }
    }
    var InterpretThenMove = function (f) {
        return function () {
            f && f();
            MoveToNext();
        };
    }
    var InterpretToNumber = (num) => {
        return function () { Stack.push(num); };
    }
    var Addition = () => {
        Stack.push(Stack.pop() + Stack.pop());
    }
    var Subtraction = () => {
        var a = Stack.pop();
        var b = Stack.pop();
        Stack.push(b - a);
    }
    var Multiplication = () => {
        Stack.push(Stack.pop() * Stack.pop());
    }
    var Division = () => {
        var a = Stack.pop();
        var b = Stack.pop();
        Stack.push(a ? Math.floor(b / a) : 0);
    }
    var Modulo = () => {
        var a = Stack.pop();
        var b = Stack.pop();
        Stack.push(a ? b % a : 0);
    }
    var Bang = () => {
        Stack.push(Stack.pop() ? 0 : 1);
    }
    var GreaterThan = () => {
        var a = Stack.pop();
        var b = Stack.pop();
        Stack.push(b > a ? 1 : 0);
    }
    var Underscore = () => {
        MoveDirection = Stack.pop() ? '<' : '>';
    }
    var pipe = () => {
        MoveDirection = Stack.pop() ? '^' : 'v';
    }
    var StringMode = () => {
        MoveToNext();
        while (Code_Instructions[Y][X] !== '"') {
            Stack.push(Code_Instructions[Y][X].charCodeAt(0));
            MoveToNext();
        }
    }
    var DuplicateValue = () => {
        Stack.push(Stack.length ? Stack[Stack.length - 1] : 0);
    }
    var Swap = () => {
        if (Stack.length === 1) {
            Stack.push(0);
        } else {
            var a = Stack.pop();
            var b = Stack.pop();
            Stack.push(a);
            Stack.push(b);
        }
    }
    var PopAsInteger = () => {
        output += Stack.pop();
    }
    var PopAsAscii = () => {
        output += String.fromCharCode(Stack.pop());
    }
    var Put = () => {
        var y = Stack.pop();
        var x = Stack.pop();
        var v = Stack.pop();
        Code_Instructions[y][x] = String.fromCharCode(v);
    }
    var Get = () => {
        var y = Stack.pop();
        var x = Stack.pop();
        Stack.push(Code_Instructions[y][x].charCodeAt(0));
    }
    var RandomDirection = () => {
        var directions = ['>', '<', '^', 'v'];
        return directions[Math.floor(Math.random() * directions.length)];
    }
    var ChangeDirection = (direction) => {
        return function () {
            MoveDirection = (direction === '?') ? RandomDirection() : direction;
        }
    }
    var Pop = () => {
        return Stack.pop();
    }

    let Instructions = {
        // 0-9 Push this number onto the stack.
        0: InterpretThenMove(InterpretToNumber(0)),
        1: InterpretThenMove(InterpretToNumber(1)),
        2: InterpretThenMove(InterpretToNumber(2)),
        3: InterpretThenMove(InterpretToNumber(3)),
        4: InterpretThenMove(InterpretToNumber(4)),
        5: InterpretThenMove(InterpretToNumber(5)),
        6: InterpretThenMove(InterpretToNumber(6)),
        7: InterpretThenMove(InterpretToNumber(7)),
        8: InterpretThenMove(InterpretToNumber(8)),
        9: InterpretThenMove(InterpretToNumber(9)),
        '+': InterpretThenMove(Addition),// + Addition: Pop a and b, then push a+b.
        '-': InterpretThenMove(Subtraction),// - Subtraction: Pop a and b, then push b-a.
        '*': InterpretThenMove(Multiplication),// * Multiplication: Pop a and b, then push a*b.
        '/': InterpretThenMove(Division),// / Integer division: Pop a and b, then push b/a, rounded down. If a is zero, push zero.
        '%': InterpretThenMove(Modulo),// % Modulo: Pop a and b, then push the b%a. If a is zero, push zero.
        '!': InterpretThenMove(Bang),// ! Logical NOT: Pop a value. If the value is zero, push 1; otherwise, push zero.
        '`': InterpretThenMove(GreaterThan),// ` (backtick) Greater than: Pop a and b, then push 1 if b>a, otherwise push zero.
        '>': InterpretThenMove(ChangeDirection('>')),// > Start moving right.
        '<': InterpretThenMove(ChangeDirection('<')),// < Start moving left.
        '^': InterpretThenMove(ChangeDirection('^')),// ^ Start moving up.
        'v': InterpretThenMove(ChangeDirection('v')),// v Start moving down.
        '?': InterpretThenMove(ChangeDirection('?')),// ? Start moving in a random cardinal direction.
        '_': InterpretThenMove(Underscore),// _ Pop a value; move right if value = 0, left otherwise.
        '|': InterpretThenMove(pipe),// | Pop a value; move down if value = 0, up otherwise.
        '"': InterpretThenMove(StringMode),// " Start string mode: push each character's ASCII value all the way up to the next ".
        ':': InterpretThenMove(DuplicateValue),// : Duplicate value on top of the stack. If there is nothing on top of the stack, push a 0.
        '\\': InterpretThenMove(Swap),// \ Swap two values on top of the stack. If there is only one value, pretend there is an extra 0 on bottom of the stack.
        '$': InterpretThenMove(Pop),// $ Pop value from the stack and discard it.
        '.': InterpretThenMove(PopAsInteger),// . Pop value and output as an integer.
        ',': InterpretThenMove(PopAsAscii),// , Pop value and output the ASCII character represented by the integer code that is stored in the value.
        '#': InterpretThenMove(MoveToNext),// # Trampoline: Skip next cell.
        'p': InterpretThenMove(Put),// p A "put" call (a way to store a value for later use). Pop y, x and v, then change the character at the position (x,y) in the program to the character with ASCII value v.
        'g': InterpretThenMove(Get),// g A "get" call (a way to retrieve data in storage). Pop y and x, then push ASCII value of the character at that position in the program.
        ' ': InterpretThenMove(),//  (i.e. a space) No-op. Does nothing.
    }

    while (Code_Instructions[Y][X] !== '@') {
        Current_Instruction = Code_Instructions[Y][X];
        Instructions[Current_Instruction]();
    }
    return output;
}

// test case:
interpret('>987v>.v\nv456<  :\n>321 ^ _@');