// Load saved expenses (or start empty)
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const form = document.getElementById("expense-form");
const list = document.getElementById("list");
const empty = document.getElementById("empty");
const totalEl = document.getElementById("total");
const catsEl = document.getElementById("categories");

document.getElementById("date").valueAsDate = new Date();

const money = n =>
  "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// yyyy-mm-dd -> DD-MM-YYYY
const formatDate = d => d.split("-").reverse().join("-");

function save() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function render() {
  // Table
  list.innerHTML = "";
  expenses.forEach((e, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${formatDate(e.date)}</td>
      <td><span class="tag"></span></td>
      <td></td>
      <td class="num">${money(e.amount)}</td>
      <td><button class="del" aria-label="Delete expense">Delete</button></td>`;
    // textContent keeps user text safe from HTML injection
    tr.querySelector(".tag").textContent = e.category;
    tr.children[2].textContent = e.description;
    tr.querySelector(".del").addEventListener("click", () => {
      expenses.splice(i, 1);
      save();
      render();
    });
    list.appendChild(tr);
  });
  empty.style.display = expenses.length ? "none" : "block";

  // Total
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  totalEl.textContent = money(total);

  // Spending by category
  const summary = {};
  expenses.forEach(e => {
    summary[e.category] = (summary[e.category] || 0) + e.amount;
  });
  catsEl.innerHTML = "";
  Object.entries(summary)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, amt]) => {
      const row = document.createElement("div");
      row.innerHTML = `
        <div class="cat-row"><span></span><span class="cat-amt">${money(amt)}</span></div>
        <div class="bar"><span style="width:${(amt / total) * 100}%"></span></div>`;
      row.querySelector("span").textContent = cat;
      catsEl.appendChild(row);
    });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  expenses.push({
    date: document.getElementById("date").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value.trim(),
    amount: parseFloat(document.getElementById("amount").value)
  });
  save();
  render();
  form.reset();
  document.getElementById("date").valueAsDate = new Date();
});

render();