"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; // dollar
var myPin = 11224;
var pinAnswer = await inquirer_1.default.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 1134 === 11224 - false
if (pinAnswer.pin === myPin) {
    console.log("correct your pin");
    inquirer_1.default.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
}
console.log('operationAns');
if ("operationAns === withdraw") {
    var amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    // =, +=, -=
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:\"", +myBalance);
}
else if ("operationAns.operation === check balance") {
    console.log("your balance is:", +myBalance);
}
else {
    console.log("incorrect your pin");
}
