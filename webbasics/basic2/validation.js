const clickButton = () => {
    let formVal = document.querySelector('input').value;
    
    if (isNaN(formVal) || formVal > 20 || formVal < 0) {
        console.log("Not a valid number");
    }
    else {
        console.log("Accepted")
        document.querySelector('h1').textContent = formVal;
    }
}

