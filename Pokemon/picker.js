document.querySelector('#submitButton').addEventListener('click', function () {
    console.log('Button was clicked');
    var name = document.querySelector('#nameInput').value;

    var e = document.getElementById("ageInput");
    var age = e.options[e.selectedIndex].value;

    var c = document.getElementById("elementInput");
    var elementIn = c.options[c.selectedIndex].value;

    if ((age == 1 || age == 2 || age == 3) && elementIn == 1) {
        console.log('Earth!' )
        document.getElementById("pokemonBall").src = "img/bulb.png";
    } else if ((age == 1 || age == 2 || age == 3) && elementIn == 2) {
        console.log('Wind')
        document.getElementById("pokemonBall").src = "img/pika.png";
    } else {
        console.log('Fire')
        document.getElementById("pokemonBall").src = "img/charz.png";
    };
    console.log("Why!");
    document.getElementById("resultsDiv").scrollIntoView({block:"end" , behaviour: "smooth"});
});




// scrollIntoViewOptions:
