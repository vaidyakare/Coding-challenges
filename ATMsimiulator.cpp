#include <iostream>
using namespace std;

double balance = 1000.0;

void checkBalance() {
    cout << "Your balance is: $" << balance << endl;
}

void deposit() {
    double amount;
    cout << "Enter amount to deposit: ";
    cin >> amount;
    balance += amount;
    cout << "Deposited successfully.\n";
}

void withdraw() {
    double amount;
    cout << "Enter amount to withdraw: ";
    cin >> amount;
    if (amount <= balance) {
        balance -= amount;
        cout << "Withdrawal successful.\n";
    } else {
        cout << "Insufficient balance!\n";
    }
}

int main() {
    int choice;
    do {
        cout << "\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nChoice: ";
        cin >> choice;
        switch (choice) {
            case 1: checkBalance(); break;
            case 2: deposit(); break;
            case 3: withdraw(); break;
            case 4: cout << "Goodbye!\n"; break;
            default: cout << "Invalid choice.\n";
        }
    } while (choice != 4);

    return 0;
}
