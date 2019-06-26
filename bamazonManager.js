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

const divider = "\n ----------------------------------------------------- \n"

function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "Welcome to Store Manager. Please specify task.",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"],
            name: "menu"
        }
    ]).then(function (res) {
        let selection = res.menu;

        switch (selection) {
            case "View Products for Sale":
                return viewProducts();
            case "View Low Inventory":
                return viewLow();
            case "Add to Inventory":
                return addInventory();
            case "Add New Product":
                return addProduct();
            case "Exit":
                connection.end();
                break;
        }
    })
}

function viewProducts() {
    connection.query("SELECT*FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        console.log(divider + "Displaying all items currently in product inventory." + divider)
        returnTo();
    });
}

function viewLow() {
    connection.query("SELECT*FROM products WHERE stock_quantity < 25", function (err, results) {
        if (err) throw err;
        console.table(results);
        console.log(divider + "Displaying items in product inventory with a stock of less than 25 items." + divider)
        returnTo()
    });
}

function addInventory() {
    connection.query("SELECT*FROM products", function (err, results) {
        if (err) throw err;
        console.table(results)
        inquirer.prompt([
            {
                type: "input",
                message: "What item would you like to add stock to? (Specify by item_id)",
                name: "id"
            },
            {
                type: "input",
                message: "How many units of this item are you adding to stock?",
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
            newStock = selection.stock_quantity + parseInt(res.amount)
            console.log(newStock + "debugging")
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

                    console.log("You have stocked " + res.amount + " units of " + selection.product_name + " to the inventory.")
                    console.log("The new total inventory of " + selection.product_name + " is " + newStock + " units.")
                    returnTo();
                });
        })
    });
}

function addProduct() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the item you wish to add to the catalog?",
            name: "product_name"
        },
        {
            type: "input",
            message: "What department will this item be listed under?",
            name: "department_name"
        },
        {
            type: "input",
            message: "What price will this item be listed at?",
            name: "price"
        },
        {
            type: "input",
            message: "How many units of this item are you adding to the initial stock?",
            name: "stock_quantity"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO products SET ?", res, function (err, results) {
            if (err) throw err;
            console.log(divider + "You have added " + res.stock_quantity + " units of " + res.product_name + " to the catalog." + divider)
            returnTo()
        });
    });
}

function returnTo() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you have more tasks to complete today?",
            choices: ["Return to Main Menu", "Exit"],
            name: "menu"
        }
    ]).then(function (res) {
        let selection = res.menu;

        switch (selection) {
            case "Return to Main Menu":
                return start();
            case "Exit":
                connection.end();
                break;
        }
    })
}