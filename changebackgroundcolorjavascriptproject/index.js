
// set colors array
let colors = ['blue', 'yellow', 'black', 'red', 'orange', 'brown', 'purple', 'gray', 'pink', 'white'];
//add event listener for button
let button = document.getElementById("button");
//event listener function setting background colors from array when button clicked
button.addEventListener('click', function() {
    //initialize variable with random color from array
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //initialize container variable
    let container = document.getElementById('container');
    //set container to random color
    container.style.backgroundColor = randomColor;
    //set button to random color
    button.style.backgroundColor = randomColor;

    
});