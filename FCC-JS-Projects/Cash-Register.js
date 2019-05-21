
// JavaScript Algorithms and Data Structures Projects: Cash Register
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/

//solution:

const CashInDrawer = [
    ["ONE HUNDRED", 100.00],
    ["TWENTY", 20.00],
    ["TEN", 10.00],
    ["FIVE", 5.00],
    ["ONE", 1.00],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var totalCID = 0;

    cid.forEach((i) => {
        totalCID += i[1];
    })

    if (change > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (change === totalCID) {
        return { status: "CLOSED", change: cid };
    }

    if (change < totalCID) {

        const changeArr = [];

        CashInDrawer.forEach((pire) => {

            var amount = 0;
            let cidIndx = null;

            for (var i in cid) {
                if (cid[i][0] === pire[0]) {
                    cidIndx = i;
                }
            }

            while (cid[cidIndx][1] > 0 && change >= pire[1]) {

                change -= pire[1];
                cid[cidIndx][1] -= pire[1];
                amount += pire[1];
                change = Math.round(change * 100) / 100;
            }

            if (amount > 0) {
                changeArr.push([pire[0], amount]);
            }

        });

        console.log("changeArr: ", changeArr);

        if (changeArr.length < 1 || change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }

        // Here is your change, ma'am.
        return { status: "OPEN", change: changeArr };

    }
    // Here is your change, ma'am.
    // return totalCID;

}// DONE


//test case:
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);