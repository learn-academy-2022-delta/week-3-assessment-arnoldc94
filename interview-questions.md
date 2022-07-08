# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: In JavaScript the `this` keyword is used to reference a class or object when it is being called or invoked. This is used to access a desired objects properties. It can be used to help update an objects information.

  Researched answer: The `this` keyword allows developers to access the current object when being invoked. The `this` keyword references different objects depending on how its being used. In a Method `this` refers to the object, when used alone `this` relates to the global object, in a funtion the default global is the default binding for `this`, when used in a funtion in strict mode it is undefined, and in html event handlers `this` refers to the html element that received the event.



2. What is React? Why would you use it?

  Your answer: React is a JavaScript library that allows developers to easily create interactive User Inerfaces. React is constructed from components that are reusible throughout the application. In React the state allows you to pass and chandge data in components. Developers use react for its ability to rapidly create applications and for its virtual DOM which allows you to reload data without reloading the page.

  Researched answer: React is a JavaScript library created by Facebook to allow developers to easily create fast User Interfaces. The main feature is its virtual DOM. It is a tree based on JavaScript components that act as a DOM tree. It does th smallest amount of DOM maniplulation possible to keep your components up to date.



3. Which lifecycle method is required in a React class component?

  Your answer: The render() lifecycle method required in a class component. This method outputs HTML to the DOM. In the render() method it can read state and props and return our code. 

  Researched answer: Th lifecycle method that is required is render(). It is called when a component is updated. It is used to display specific html code inside of the html element. We can read state and props and return the JSX code to the root component.



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JavaScript Syntax Extension (JSX) is an extension that allows us to write HTML in react. JSX can impliment JavaScript inside of curly braces.

  Researched answer: JSX is an extension that allows us to create reacts object tree that is similar to an HTML template. You can write expressions inside curly braces. The expression can be a variable, a property or any other JavaScript expression. JsX will execute the expression and return the result.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager. The files that are modified are package.json and yarn.lock.

  Researched answer: Yarn(Yet another resource negotiator) is a package manger that work with node. Depending what you are running with yarn in general the dependencies are modified with yarn. They are created, updated, deleted.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonomys function in javascript does not have any name associated with it. These types of functions are used for instant execution.

  Researched answer: An funtion without a name associated with it that is usually passed as a paramater for instant execution.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: 
 You can create distinct components that encapsulate behavior you need. Conditional rendering works the same as conditions in JavaScript.

2. Object-oriented programming: The identification of classes of objects closely linked with the methods they are associated. The idea of ineriting attributes and methods.

3. Ruby: Ruby is a server side scripting language. Ruby has a clean and easy syntax that is easy for developers to learn.

4. Ruby blocks: Ruby blocks are anonomys functions that can be passed into methods. It allows you to save a bit of code and use it later.

5. Ruby hashes: A collection of unique keys and their values. These are similar to arrays, but indexing is done with the help of arbitrary keys of any object type.
