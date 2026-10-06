# Expense Tracker

A simple expense tracker that helps you record spending, see your total, and understand where your money goes. It comes in two versions: a web app and a command-line program.

**Live demo:** https://expensetracker-nine-mocha.vercel.app/

## Features

**Web app**
- Add expenses with date, category, description and amount (in ₹)
- View all expenses in a table and delete any entry
- See total spending at a glance
- Category breakdown with bars showing each category's share
- Data saved in the browser (localStorage), so it stays after a refresh
- Light and dark theme that follows your device setting
- Responsive layout that works on mobile and desktop

**Python version (`main.py`)**
- Menu-driven command-line interface
- Add expenses, view all expenses, view total spending, and view spending by category

## Tech Stack

| Part | Technology |
| --- | --- |
| Web structure | HTML5 |
| Web styling | CSS3 (custom properties, Grid, Flexbox) |
| Web logic | JavaScript (ES6) |
| Command-line version | Python 3 |

## Project Structure

```
expense_tracker/
├── index.html    # Page structure
├── style.css     # Styling and themes
├── script.js     # App logic and local storage
├── main.py       # Command-line version
└── README.md
```

## Getting Started

### Run the web app

1. Clone the repository:
   ```
   git clone https://github.com/Rajnikant9835/expense_tracker.git
   cd expense_tracker
   ```
2. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

### Run the Python version

```
python main.py
```

Requires Python 3.x. No extra packages needed.

## How to Use

1. Fill in the form with the date, category, description and amount.
2. Click **Add expense**.
3. Check your total and category breakdown as they update.
4. Use **Delete** on any row to remove an expense.

## Future Improvements

- Chart view for spending by category
- Filter expenses by date or category
- Edit existing expenses
- Export data to CSV
- Flask backend with a database, connecting the Python and web versions

## Author

**Rajnikant Kumar**
GitHub: [@Rajnikant9835](https://github.com/Rajnikant9835)