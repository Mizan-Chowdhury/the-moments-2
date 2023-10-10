<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : empty object: {}.

<i> Here create a variable called "greeting". Then, assigned an empty object to "greetign". When we console log the value of "greetign", it outputs an empty object since it was never assigned any properties.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C : "12"

<i>In JavaScript, the `+` operator is used for both addition and concatenation of strings. When the `sum()` function is called with `1` as a number and `"2"` as a string, the `+` operator treats the second argument as a string and concatenates it to the first argument. Therefore, `1` and `"2"` are concatenated as strings.
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i> here created an array called `food` with four items, and an object called `info` with a property `favoriteFood` set to the first item in the `food` array. then updated the `favoriteFood` property of the `info` object to `"🍝"`. 

However, this does not affect the `food` array at all 
Therefore,logged the `food` array to the console, we see its original contents: `["🍕", "🍫", "🥑", "🍔"]`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `Hi there,`

<i>here created a function called `sayHi()` that takes one argument `name`.

The function returns a string that includes the argument within a template literal string: `Hi there, ${name}`. However, when the function is called inside the `console.log()` statement, no argument is passed to the function. 

Therefore, the function is invoked with an undefined `name` parameter, and so the string returned will include the text "Hi there, undefined". </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>here used the `forEach()` method to loop through each element in the `nums` array. For each element, the callback function passed to `forEach()` checks whether the element is truthy and if so, the `count` variable is incremented by `1`.

In this case, all of the elements in the `nums` array except for the first element (`0`) are truthy. Therefore, the callback function will be called three times and the `count` variable will be incremented by `1` three times, resulting in a final value of `3`.</i>

</p>
</details>
