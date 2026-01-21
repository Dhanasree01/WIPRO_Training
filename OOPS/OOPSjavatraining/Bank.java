// Abstract class for Bank Account
abstract class BankAccount {
    double balance = 3000;

    // concrete methods
    void deposit(int amount) {
        balance = balance + amount;
        System.out.println("Deposited: " + amount);
        System.out.println("Balance: " + balance);
    }

    void withdraw(int amount) {
        balance = balance - amount;
        System.out.println("Withdrawn: " + amount);
        System.out.println("Balance: " + balance);
    }
}

// Interface for EMI payment
interface Payment {
    void payEMI(String mode);
}

// LoanAccount class extends abstract class and implements interface
class LoanAccount extends BankAccount implements Payment {

    void calculateEMI(double loanAmount, int months) {
        double emi = loanAmount / months;
        System.out.println("Monthly EMI: " + emi);
    }

    // interface method implementation
    public void payEMI(String mode) {
        System.out.println("EMI paid using: " + mode);
    }
}

// Main class
public class Bank {
    public static void main(String[] args) {

        LoanAccount acc = new LoanAccount();

        acc.deposit(4000);
        acc.withdraw(1000);

        acc.calculateEMI(10000, 12);
        acc.payEMI("Cash");
        acc.payEMI("Card");
    }
}








//Write a program for bank account to know the balance after depositing and withdrawing the amount 
// and also having the loan account facilitiy to calculate the emi and monthly emi's will be
//paid by customer using either by card or cash 