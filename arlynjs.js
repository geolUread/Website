var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


//Function to stop the confetti from falling
function stopConfetti(){
    document.getElementById("my-canvas").style.visibility = "hidden";
}

//When button is pressed the confetti falls down
function topButton(data){

    //Verifies the button has been clicked.
    console.log("Button clicked");
    //Makes the confetti visible and allows it to be visible for 3 seconds.
    document.getElementById("my-canvas").style.visibility = "visible";
    setTimeout(stopConfetti, 3000);

    //If the resume button was clicked the following will execute the data into the mustache template.
    if(data==="resume"){

        console.log("Resume has been clicked");
        document.getElementById("info").style.visibility = "visible";
        $.getJSON('resumeInterestProjects.json', function(result) {
            var template = $("#template_must").html();
            var text = Mustache.render(template, result);   
            $("#info").html(text);
        });
    }
}

