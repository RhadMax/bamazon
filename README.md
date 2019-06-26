# Bamazon Customer and Manager Applications
---

### Description
A UCSD Extension Coding Bootcamp homework assignment using NodeJS and MySQL in tandem.

---

### Purpose
This application serves as a chance to build a node application from the ground up that will work alongside a schema and table made within MySQL workbench to provide persistent data that can be interacted with via the node terminal. The potential applications of this combination are many and varied, but for the sake of this activity it will be to create a mock up of a storefront and/or application usable by a store manager to maintain inventory or add new items.

---

### Overview
There are two parts to this application, so it can be run either as a 'Customer' or as a 'Manager'. Each interfact is set up within its own script file and both interact with a locally hosted MySQL database, the schema for which is saved in the repository as a .sql file. The script files are run in the terminal via NodeJS and make use of both the MySQL npm package and the Inquirer package to give and receive user input prompts.

---

### Usage 
Very simple back-end only usage, download appropriate packages (Inquirer and mySQL), run the bamazon.sql file in mySQL workbench, and then use the terminal to execute the script files via "node <filename>. From there the user can interact with menu options using the arrow keys and enter key via the Inquirer provided interface with text as specified by the application. Occasionally the user is prompted to also enter a string or number to either specify an index on the displayed tables of data or to specify what new data should be inputted. 

The 'Customer' application shows the user the catalag of items and allows them to choose items and purchase a specified quantity, being returned the total cost depending on the item. The table contents are updated after purchase and there is input validation to ensure there is enough stock available before a purchase is made.

The 'Manager' application has a main menu, where the manager can choose to view all items, view only items that are low on stock (under 25 units), add more stock to the inventory (specifying which item and how many units to add), and also an option to add a whole new item to the product catalag, being prompted to input a name, department, price and quantity for the new item.

---

### Demo of Usage
Here is a video clip of the two applications in use. 
 * [Screencastify Demonstration](https://drive.google.com/file/d/1rmYmyuBFeSsAGQgeBUOGnoOc_Q21fL66/view)

---

### Technologies
This application makes use of the following technologies:

1. Javascript
2. NodeJS
3. GitHub
4. MySQL, MySQL Workbench
5. npmJS Packages
    * Inquirer
    * mySQL

---

### Credits
This application was developed by me, Max Patten, and I made use of skills and references taught to and provided to me by the UCSD Extension Full Stack Coding Bootcamp. The description of its intended functionality were provided to me by the Bootcamp along with a list of required functionalities for each script file to be able to provide.