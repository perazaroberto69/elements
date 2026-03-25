# cs2-dom-create-elements

# Learning Target
- I am learning how to create elements using the DOM
# Success Criteria
- I can define and call functions that take parameters
- I can use ```document.createElement(tag)``` to create elements
- I can use ```document.body.appendChild(element)``` to add an element to the page

# Project Setup
1. Install *Live Server*
2. Create ```script.js```
3. Add ```console.log("Script started")``` to begining of ```script.js```
4. Add ```<script src="script.js"></script>``` before ```</body>``` tag in ```index.html``` to link the script

# Essential Notes
## Steps to creating a new element with JavaScript
1. Create a new element
    - Use ```let myElement = document.createElement(tagName);``` to create a new element and store it in a variable
    - ```tagName``` should be a string tag name like ```"p"``` or ```"h1"```
    - ```myElement``` is just an example variable name, choose an appropriate name for your situation
3. Set the text using
    - Use ```myElement.innerText = "the text";```
4. Set the styles
    - Use ```myElement.style.property = "newValue";``` e.g. ```myElement.style.color = "red";``` to make the text red
5. Add the element to the body of the page
    - Use ```document.body.appendChild(myElement)```;
  
# Example
Build a program for taking attendance
1. Define a function called ```start``` that prints "click" to the console
2. Create a button with the text ***Take attendance*** that calls the ```start()``` function when clicked and test that it works
3. Use ```document.createElement("h1")``` to create a new level 1 heading and store it in a variable named ```heading```
4. Set the ```.innerText``` to *Attendance*
5. Set some ```.style``` properties
6. Use ```document.body.appendChild(heading)``` to add the heading to the page
7. Test that it works, check your console for errors

# Exercise 1
Create an ```addName``` function
1. Continue the ```start``` function and use ```prompt``` to ask the user for their name and store it in a variable called ```userName```
2. Use ```console.log``` to print ```userName``` to the console and verify that it works
3. Define a function called ```addName``` and takes a parameter called ```newName```
4. Add code to the function to create a new h2 element, set its text ```newName``` and add the h2 to the page
5. Call the ```addName``` function from the ```start``` function and pass ```userName``` as the parameter
6. Test that it works, check your console for errors

# Exercise 2
Modify the example to ask for the user's first name then last name, and then adds a new h2 to the page with their name shown as **Last, First**
1. In the ```start``` function, add a second ```prompt``` to ask for their last name and store the result in a variable called ```userLastname```
2. Modify the ```addName``` function to take a second parameter called ```lastname```
3. Modify the line that sets the text of the h2 so that it will print out the users name in the format *Lastname, Firstname*
4. Test that it works

# Exercise 3
Create an ```addSeparator``` function that adds an hr element (horizontal rule line) after a each name
1. Define a function named ```addSeparator``` after your ```addName``` function
2. In the function, use ```document.createElement("hr")``` to create the line and store in a variable (pick a good name for the variable)
3. Use ```document.body.appendChild(yourVariable)``` to add the hr line to the page 
4. Call the ```addSeparator``` function from the ```start``` function after you call ```addName```
5. Test that it works
6. Modify your script to take attendance for 5 people (your ```start``` function should have 5 prompts for names, 5 calls to ```addName```, and 5 calls to ```addSeparator```)