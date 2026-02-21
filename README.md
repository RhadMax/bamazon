# Bamazon

A terminal-based storefront simulation built with **Node.js** and **MySQL**. The application allows users to browse inventory, place purchases, and perform basic inventory management through a CLI interface.

This project focuses on **database interaction**, **input-driven workflows**, and **state updates through SQL operations**.

---

## Features

### Customer Mode
- View product catalog
- Select items to purchase
- Quantity validation against available inventory
- Automatic stock updates after purchase
- Order total calculation

### Manager Mode
- View full inventory
- Identify low-stock items
- Add inventory to existing products
- Create new product entries

---

## Tech Stack

- Node.js
- MySQL
- Inquirer (CLI prompts)

---

## How it Works

The application connects to a locally hosted MySQL database and exposes two command-line workflows:

1. **Customer workflow**
   - Displays inventory
   - Accepts purchase input
   - Validates stock availability
   - Updates database

2. **Manager workflow**
   - Provides inventory visibility and modification tools
   - Supports restocking and new product creation

---

## Running Locally

### Prerequisites
- Node.js
- MySQL server

### Setup
```bash
npm install
