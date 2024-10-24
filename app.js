const generateNumber = document.forms["generate-numbers"]; //getting the form

generateNumber.addEventListener('submit', function (e) { //adding a submit event
    e.preventDefault(); //prevent the form from refreshing when i click submit
    value = generateNumber.querySelector('input').value; //getting the number typed
    for (let number = 1; number <= value; number++) { //generating numbers from one to whatever value typed
        const parentDiv = document.querySelector("#container"); //getting the parent div element
        //create, add class and append element
        const div = document.createElement('div'); //create div element
        div.textContent = number; //added content
        div.classList.add('child-div'); //added className 
        parentDiv.appendChild(div); //appended it parent element

        //odd and even number check
        const evenAndOdd = evenOddNumbers(number);
        if (evenAndOdd) {
            div.style.backgroundColor = "green";
        } else {
            div.style.backgroundColor = "yellow";
        }


        //prime number check
        const primeNumber = isPrimeNumber(number);
        if (primeNumber) {
            div.style.backgroundColor = 'red';
        }

    }
})

//function for even and odd numbers
function evenOddNumbers(n) {
    return n % 2 == 0
}

//function for primenumbers
function isPrimeNumber(n) {
    if (n === 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//function to clear the input
const div = document.querySelector('#container') //get the div element
generateNumber.addEventListener('keyup', function(e){ //i added an event to the form
    const childDivs = document.querySelectorAll('#container div'); // i got the children of the parent div element
    Array.from(childDivs).forEach(function(childDiv){ //converted the node list to an array
        if(childDiv.className = "child-div") { //check the className using if statement
            div.removeChild(childDiv) //delete child
        }
    })
})


    
    



