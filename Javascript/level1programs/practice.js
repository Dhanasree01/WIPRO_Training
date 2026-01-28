// Take employee details
let employeeName = prompt("Enter Employee Name:");
let workingDays = Number(prompt("Enter number of working days in the month:"));
let basicPayPerDay = Number(prompt("Enter basic pay per day:"));
let bonus = Number(prompt("Enter bonus amount:"));

// a) Calculate Gross Salary
let grossSalary = (workingDays * basicPayPerDay) + bonus;

// b) Apply Tax Deduction
// Tax rules (example):
// Gross <= 20000 → 5% tax
// Gross > 20000 → 10% tax

let tax = 0;

if (grossSalary <= 20000) {
    tax = grossSalary * 0.05;
} else {
    tax = grossSalary * 0.10;
}

// c) Calculate Net Salary
let netSalary = grossSalary - tax;

// Display result
console.log("Employee Name:", employeeName);
console.log("Gross Salary:", grossSalary);
console.log("Tax Deduction:", tax);
console.log("Net Salary:", netSalary);

alert(
    "Employee: " + employeeName +
    "\nGross Salary: " + grossSalary +
    "\nTax: " + tax +
    "\nNet Salary: " + netSalary
);
