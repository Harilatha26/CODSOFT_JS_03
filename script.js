class UserAccount {
    constructor(balance = 0.0) {
        this.balance = balance;
    }
}

class ATM {
    constructor(userAccount) {
        this.userAccount = userAccount;
    }

    withdraw() {
        const amount = parseFloat(document.getElementById('withdrawAmount').value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById('withdrawMessage').innerText = "Invalid amount. Please enter a positive number.";
        } else if (amount > this.userAccount.balance) {
            document.getElementById('withdrawMessage').innerText = "Insufficient funds.";
        } else {
            this.userAccount.balance -= amount;
            document.getElementById('withdrawMessage').innerText = `Successfully withdrawn ${amount}. Current balance is ${this.userAccount.balance}.`;
        }
    }

    deposit() {
        const amount = parseFloat(document.getElementById('depositAmount').value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById('depositMessage').innerText = "Invalid amount. Please enter a positive number.";
        } else {
            this.userAccount.balance += amount;
            document.getElementById('depositMessage').innerText = `Successfully deposited ${amount}. Current balance is ${this.userAccount.balance}.`;
        }
    }

    checkBalance() {
        document.getElementById('balanceMessage').innerText = `Current balance is ${this.userAccount.balance}.`;
    }
}

const account = new UserAccount(1000.0);
const atm = new ATM(account);

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}
