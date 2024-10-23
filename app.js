const generateNumber = document.forms["generate-numbers"]; //getting the form

generateNumber.addEventListener('submit', function(e){ //adding a submit event
    e.preventDefault(); //prevent the form from refreshing when i click submit
    value = generateNumber.querySelector('input').value; //getting the number typed
    for (let number = 1; number <= value; number++) { //generating numbers from one to whatever value typed
        const parentDiv = document.querySelector("#container"); //getting the parent div element
        //create and append element
        const div = document.createElement('div'); //create div element
        div.textContent = number; //added content
        parentDiv.appendChild(div); //appended it parent element

        //function for even and odd numbers
        function evenOddNumbers() {
            if (number % 2 == 0) {
                div.style.backgroundColor = "green";
            } else {
                div.style.backgroundColor = "yellow";
            }
        }
        evenOddNumbers();

        //function for primenumbers
        function primeNumbers() {
            if (number === 1) {
                return number;
            }
            for (let i = 2; i < number; i++){
                if (number % i === 0) {
                    return number;
                } 
            }
            div.style.backgroundColor = 'red';
        }
        primeNumbers();
    }
    
    
})
