🚀 Coding Challenges in Multiple Languages

Welcome to the Coding Challenges Repository! 🎉
This project is designed to help developers practice problem-solving, improve coding skills, and learn how to implement the same challenge in different programming languages.

Whether you’re a beginner looking to strengthen fundamentals or an experienced developer revisiting core concepts, this repository will guide you through a wide range of challenges.

📂 Repository Structure

The repository is organized by language and challenge:

coding-challenges/
│
├── python/
│   ├── challenge1.py
│   ├── challenge2.py
│   └── ...
│
├── javascript/
│   ├── challenge1.js
│   ├── challenge2.js
│   └── ...
│
├── java/
│   ├── Challenge1.java
│   ├── Challenge2.java
│   └── ...
│
├── cpp/
│   ├── challenge1.cpp
│   ├── challenge2.cpp
│   └── ...
│
└── README.md

📝 Challenges Covered

Some of the challenges currently included:

Reverse a String

Check Palindrome

FizzBuzz

Factorial Calculation

Find Largest Number in an Array

Prime Number Check

Fibonacci Series

Two Sum Problem

Anagram Checker

Sorting Algorithms (Bubble, Quick, Merge, etc.)

(More challenges will be added regularly.)

⚡ Example Solutions
1. Reverse a String
Python
def reverse_string(s):
    return s[::-1]

print(reverse_string("Hello"))  # Output: olleH

JavaScript
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // Output: olleH

Java
public class Challenge1 {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(reverseString("Hello")); // Output: olleH
    }
}

2. FizzBuzz
Python
for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

JavaScript
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

▶️ How to Run the Code
Python
cd python
python challenge1.py

JavaScript (Node.js required)
cd javascript
node challenge1.js

Java
cd java
javac Challenge1.java
java Challenge1

C++
cd cpp
g++ challenge1.cpp -o challenge1
./challenge1

🛠️ Requirements

Python ≥ 3.7

Node.js ≥ 14.x

Java ≥ JDK 11

g++ (for C++)

🌱 Contribution Guidelines

We welcome contributions! Here’s how you can help:

Fork the repository

Create a new branch:

git checkout -b feature/add-new-challenge


Add your solution in the respective language folder.

Update the README.md if necessary.

Commit your changes:

git commit -m "Added new challenge: <challenge-name>"


Push to your fork and submit a Pull Request.

⭐ Support

If you find this repository helpful:

Star ⭐ the repo

Share it with your friends

Contribute new challenges

Let’s grow together by solving problems in multiple languages 🚀
