console.log('Script loade succesfully!');

// Function to validate Form
function validateForm(){
    // Get the input element by its ID
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        // if the input is empty, alert the user
        alert('Please enter your name!');
    } else{
        // if the input is valid, display the name in the result form
        document.getElementById('result-form').innerHTML = nameInput.value;
    }
}