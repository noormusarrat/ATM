#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 13000;
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: [{ name: "Withdraw", value: "withdraw" }, { name: "Check balance", value: "check balance" }, { name: "Fast cash", value: "fast cash" }]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance! Transaction denied.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("You have successfully withdraw $" + amountAns.amount);
            console.log("Your remaining balance is $" + myBalance);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "please select a fast cash amount",
                type: "list",
                choices: [{ name: "$1000", value: "1000" }, { name: "$5000", value: "5000" }, { name: "$10000", value: "10000" }, { name: "$15000", value: "15000" }]
            }
        ]);
        if (fastcashAns.cash > myBalance) {
            console.log("Insufficient balance! Transaction denied.");
        }
        else {
            myBalance -= fastcashAns.cash;
            console.log(`You have successfully withdraw $${fastcashAns.cash}.`);
            console.log(`Your remaining balance is $${myBalance}.`);
        }
    }
}
else {
    console.log("Incorrect Pin Code");
}
