function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}



// # 📘 Debounce in JavaScript — Complete Notes

// ---

// ## 🧠 1. What is Debounce?

// Debouncing is a technique used to **limit how often a function executes**.

// > It ensures a function runs **only after a certain delay has passed since the last time it was triggered**.

// ---

// ## 🎯 2. Why do we need Debounce?

// Without debounce:

// * Function runs **every time an event occurs**
// * Leads to:

//   * 🚫 Too many function calls
//   * 🚫 Performance issues
//   * 🚫 Unnecessary API requests

// ### Example:

// User typing in search box:

// ```
// m → ma → man → mang → mango
// ```

// Without debounce:
// 👉 5 function calls

// With debounce:
// 👉 1 function call (after typing stops)

// ---

// ## ⚙️ 3. Core Idea

// > “Delay execution, and cancel previous delay if a new event occurs.”

// ---

// ## 🔧 4. Basic Implementation

// ```js
// function debounce(func, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }
// ```

// ---

// ## 🧩 5. Step-by-Step Logic

// ### Step 1: Create memory for timer

// ```js
// let timer;
// ```

// 👉 Stores timeout ID

// ---

// ### Step 2: Return a wrapper function

// ```js
// return function (...args)
// ```

// 👉 This function is called repeatedly

// ---

// ### Step 3: Cancel previous timer

// ```js
// clearTimeout(timer);
// ```

// 👉 Prevents old execution

// ---

// ### Step 4: Set new timer

// ```js
// timer = setTimeout(() => {
//     func.apply(this, args);
// }, delay);
// ```

// 👉 Schedules latest execution

// ---

// ## 🎮 6. Execution Flow

// ### Without debounce:

// ```
// type → run
// type → run
// type → run
// ```

// ### With debounce:

// ```
// type → cancel
// type → cancel
// type → cancel
// (wait...) → run
// ```

// ---

// ## 🧪 7. Example Usage

// ```js
// const handleSearch = debounce((value) => {
//     console.log("Searching for:", value);
// }, 500);

// input.addEventListener("input", (e) => {
//     handleSearch(e.target.value);
// });
// ```

// ---

// ## 📦 8. Key Concepts Used

// ### ⏳ setTimeout

// Delays function execution

// ### ❌ clearTimeout

// Cancels scheduled execution

// ### 📥 ...args (rest parameters)

// Captures arguments passed to function

// ### 🔄 apply()

// Calls function with:

// * correct `this`
// * correct arguments

// ---

// ## 🧠 9. Important Behavior

// * Only the **last call** is executed
// * Previous calls are **discarded**
// * Uses **closure** to remember timer

// ---

// ## ⚠️ 10. Common Mistakes

// ### ❌ Not clearing timeout

// ```js
// setTimeout(func, delay);
// ```

// 👉 Runs multiple times

// ---

// ### ❌ Not returning function

// Debounce must return a function

// ---

// ### ❌ Ignoring arguments

// ```js
// func();
// ```

// 👉 Loses input data

// ---

// ## 🎯 11. When to Use Debounce

// * 🔍 Search inputs
// * 📡 API calls
// * 🧾 Form validation
// * 🧠 Auto-suggestions
// * 🖱️ Resize / input events

// ---

// ## ⚡ 12. Debounce vs Throttle

// | Feature   | Debounce        | Throttle        |
// | --------- | --------------- | --------------- |
// | Execution | After delay     | At intervals    |
// | Use case  | Search input    | Scroll, resize  |
// | Behavior  | Waits for pause | Runs repeatedly |

// ---

// ## 🧠 13. How to Think From Scratch

// If asked in interview:

// 1. Use `setTimeout` to delay execution
// 2. Store timer ID
// 3. Clear previous timer on each call
// 4. Set new timer
// 5. Execute function after delay

// ---

// ## 🎯 14. Interview One-Liners

// ### Simple:

// > Debounce delays function execution until after a period of inactivity.

// ### Technical:

// > It clears previous timeouts and sets a new one, ensuring only the last call executes.

// ---

// ## 🧩 15. Mental Model

// > “Keep cancelling future execution until user stops.”

// ---

// ## 🚀 16. Summary

// * Debounce improves performance
// * Prevents unnecessary executions
// * Uses `setTimeout + clearTimeout`
// * Executes only the **last event**

// ---

// ## 🎉 Final Thought

// Debounce is like a patient listener 🧘
// It waits for you to finish before responding.

// ---
