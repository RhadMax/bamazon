require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
// var mysql = new Mysql(keys.SqlWorkbench);

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.PASS,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function newPurchase() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to place another order?",
            choices: ["Yes", "No"],
            name: "confirm"
        }
    ]).then(function (res) {
        if (res.confirm === "Yes") {
            console.log("Returning to catalog");
            start();
        } else {
            console.log("Have a nice day!");
            connection.end();
        }
    });
};

function start() {
    //display data from db to user as a console.table
    connection.query("SELECT*FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);


        //call inquirer to ask user what item they wish to buy by ID, then how many of that item they wish to buy
        inquirer.prompt([
            {
                type: "input",
                message: "What item would you like to purchase? (Specify by item_id)",
                name: "id"
            },
            {
                type: "input",
                message: "How many of this item do you wish to buy?",
                name: "amount"
            }
        ]).then(function (res) {
            var selection;
            var newStock;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(res.id)) {
                    selection = results[i];
                }
            }
            //compare quantity of item requested against volume requested to buy by user
            newStock = results.stock_quantity - parseInt(res.amount)
            if (parseInt(res.amount) <= parseInt(selection.stock_quantity)) {
                newStock = selection.stock_quantity - parseInt(res.amount);
                let totalCost = selection.price * parseInt(res.amount);
                //if stock is available update database
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: newStock
                        },
                        {
                            item_id: selection.item_id
                        }
                    ], function (err, results) {
                        if (err) throw err;
                    });
                console.log("Your order for " + res.amount + " units of " + selection.product_name + " has been processed.")
                console.log("The total cost of your purchase is " + totalCost)
                //display total of transaction to user in log
                newPurchase();
            } else {
                //end connection
                console.log("There is not enough of this item in stock. Please make another selection.")
                newPurchase();
            }
        })
    });
}