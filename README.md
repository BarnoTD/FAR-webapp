# Financial Transaction Tracker Web Application

This is a basic Financial Transaction Tracker Web Application built using FastAPI for the backend, ReactJS for the frontend, and SQLite for the database. The web app allows users to add, read, edit, and remove transactions.

## Features

- **Add Transaction**: Users can add new financial transactions with details like date, description, amount, and category.
- **Read Transactions**: Users can view a list of all transactions sorted by date.
- **Edit Transaction**: Users can modify existing transactions.
- **Remove Transaction**: Users can delete transactions they no longer need.

## Technologies Used

- **FastAPI**: FastAPI is used to build the backend REST API that handles HTTP requests and interacts with the database.
- **ReactJS**: ReactJS is used for the frontend user interface, providing an interactive and responsive experience.
- **SQLite**: SQLite is used as the database to store transaction data. It's lightweight and suitable for small-scale applications.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/financial-transaction-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd financial-transaction-tracker
   ```

3. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

5. Run the backend server:

   ```bash
   uvicorn main:app --reload
   ```

6. Run the frontend development server:

   ```bash
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Upon accessing the application, users will be presented with a list of existing transactions.
- Users can add a new transaction by clicking on the "Add Transaction" button and filling out the required fields.
- To edit a transaction, click on the transaction in the list and make the necessary changes.
- To remove a transaction, click on the delete icon next to the transaction in the list.

## Database Schema

The SQLite database contains a single table named `transactions` with the following schema:

- **id**: Primary key auto-incrementing integer.
- **date**: Date of the transaction (YYYY-MM-DD format).
- **description**: Description of the transaction.
- **amount**: Amount of the transaction (decimal).
- **category**: Category of the transaction.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
