import inquirer from "inquirer";
const mybalance = 50000;
const mypin = 2468;
const atm = await inquirer.prompt({
    name: "pincode",
    message: "Please enter your pin code",
    type: "number"
});
if (atm.pincode === mypin) {
    console.log("your pincode is correct!");
}
const operators = await inquirer.prompt({
    name: "operation",
    message: "Please select your operators",
    type: "list",
    choices: ["withdraw", "fastcash", "checkbalance"]
});
if (operators.operation === "checkbalance") {
    console.log(`your account balance is ${mybalance}`);
}
else if (operators.operation === "withdraw") {
    const amountans = await inquirer.prompt({
        name: "amount",
        message: "Please enter your amount",
        type: "number"
    });
    let balance = mybalance - amountans.amount;
    if (amountans.amount <= mybalance) {
        console.log(`your remaing balance is ${balance}`);
    }
    else {
        console.log("your account balance is in sufficient");
    }
}
else if (operators.operation === "fastcash") {
    const cashans = await inquirer.prompt({
        name: "cash",
        message: "please select your amount",
        type: "list",
        choices: ["2000", "4000", "4000", "7000"]
    });
    let balance2 = mybalance - cashans.cash;
    console.log(`your balance  is ${balance2}`);
}
else {
    console.log("your pin code is incorrect");
}
