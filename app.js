const generateNumber = document.forms["generate-numbers"]; //getting the form

generateNumber.addEventListener('submit', function (e) { //adding a submit event
    e.preventDefault(); //prevent the form from refreshing when i click submit
    value = generateNumber.querySelector('input').value; //getting the number typed
    for (let number = 1; number <= value; number++) { //generating numbers from one to whatever value typed
        const parentDiv = document.querySelector("#container"); //getting the parent div element
        //create and append element
        const div = document.createElement('div'); //create div element
        div.textContent = number; //added content
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

