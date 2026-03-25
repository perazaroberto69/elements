console.log("Script started")

function start(){
    console.log("click");
    //Create the h1 element
    let heading = document.createElement("h1");
    // set text of the heading
    heading.innerText = "Attendance";
    //set styles
    heading.style.color = "blue"
    //This adds it to the pahe when you click
    document.body.appendChild(heading);
    let name = prompt("Enter Name");
    addName(name);
    let userLastName = prompt("Enter Last Name");
}

function addName(newName, lastName){
    console.log(newName);
    let heading2 = document.createElement("h2");
    heading2.innerText = newName;
    document.body.appendChild(heading2);
    
}
