var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


//Function to stop the confetti from falling
function stopConfetti(){
    document.getElementById("my-canvas").style.visibility = "hidden";
}

//When button is pressed the confetti falls down
function topButton(data){

    if(document.getElementById("info").style.display === "none")
    {
        document.getElementById("info").style.display = "block";
    }
    //Makes the confetti visible and allows it to be visible for 3 seconds.
    document.getElementById("my-canvas").style.visibility = "visible";
    setTimeout(stopConfetti, 3000);

    //Retrieve JSON to fill the mustache template.
    $.getJSON('resumeInterestProjects.json', function(result) {

    //If the resume button was clicked the following will execute the data into the mustache template.
    if(data==="resume"){
        outputResume(result);
    }
    else if(data == "project"){
        outputProject(result);
    }
    else if(data = "interest"){
        outputInterest(result);
    }
    });
}


function outputResume(result){

    console.log("Resume has been clicked");
    document.getElementById("info").style.visibility = "visible";
    var template = $("#template_resume").html();
    var text = Mustache.render(template, result);   
    $("#info").html(text);
}

function outputProject(result){

    console.log("Project has been clicked");
    document.getElementById("info").style.visibility = "visible";
    var template = $("#template_project").html();
    var text = Mustache.render(template, result);   
    $("#info").html(text);
}

function outputInterest(result){

    console.log("Interest has been clicked");
    document.getElementById("info").style.visibility = "visible";
    var template = $("#template_interest").html();
    var text = Mustache.render(template, result);   
    $("#info").html(text);
}

function hide(){

    document.getElementById("info").style.display = "none";
    document.getElementById("my-canvas").style.visibility = "visible";
    setTimeout(stopConfetti, 3000);
}