$(window).resize(function() {
    if (window.innerWidth <= 400) {
        $("#rules").addClass('justify-content-center');
        $("#icon1").addClass('justify-content-center');
        $("#icon2").addClass('justify-content-center');
        $("#space").removeClass('space');
        /*$("#wide").removeClass('wid');
        $("#user").removeClass('wide'); 
        $("#cpu").removeClass('wide');
        $("more").removeClass("more");*/
    }
    else {
        $("#rules").removeClass('justify-content-center');
        $("#space").addClass('space');
        /*$("#wide").addClass('wid');  
        $("#user").addClass('wide');    
        $("#cpu").addClass('wide');  
        $("more").addClass("more");*/
    }
});



var choices = ["scissors", "rock", "paper", "lizard", "spock"];
var score = 0;

$("#modalB").click(function(){
    $('#myModal').modal('show');
});

$("#closeM").click(function(){
    $('#myModal').modal('hide');
});

$("#playAgain").click(function(){
    $("#playersChoice").removeClass("invisible");
    $("#playersChoice").addClass("visible");
    $("#results").removeClass("visible");
    $("#results").addClass("invisible");
});

$(".chosen").click(function(){
    startGame($(this).attr("id"));
});

function startGame(choice){
    $("#playersChoice").removeClass("visible");
    $("#playersChoice").addClass("invisible");

    $("#results").removeClass("invisible");
    $("#results").addClass("visible");

    var rand = Math.floor(Math.random()*5);
    var cpu = choices[rand];

    $("#userColor").removeClass("scissors rock spock lizard paper");
    $("#cpuColor").removeClass("scissors rock spock lizard paper");
    
    $("#cpuColor").addClass(cpu);
    $("#userColor").addClass(choice);

    $("#user").attr("src","images/icon-"+choice+".svg");
    $("#cpu").attr("src","images/icon-"+cpu+".svg");

    
    switch(choice){
        case "scissors":
            if(cpu === "paper" || cpu === "lizard"){
                $("#msg").text("YOU WIN");
                score+=1;
            }
            else if(cpu === "spock" || cpu === "rock"){
                $("#msg").text("YOU LOSE");
                score-=1;
            }
            else{
                $("#msg").text("YOU TIED"); 
            }
            break;
            case "rock":
            if(cpu === "scissors" || cpu === "lizard"){
                $("#msg").text("YOU WIN");
                score+=1;
            }
            else if(cpu === "spock" || cpu === "paper"){
                $("#msg").text("YOU LOSE");
                score-=1;
            }            
            else{
                $("#msg").text("YOU TIED"); 
            }
            break;
            case "paper":
                if(cpu === "rock" || cpu === "spock"){
                    $("#msg").text("YOU WIN");
                    score+=1;
                }
                else if(cpu === "scissors" || cpu === "lizard"){
                    $("#msg").text("YOU LOSE");
                score-=1;
            }
            else{
                $("#msg").text("YOU TIED"); 
            }
            break;
            case "lizard":
                if(cpu === "paper" || cpu === "spock"){
                    $("#msg").text("YOU WIN");
                    score+=1;
                }
                else if(cpu === "scissors" || cpu === "rock"){
                    $("#msg").text("YOU LOSE");
                    score-=1;
                }
                else{
                    $("#msg").text("YOU TIED"); 
                }
                break;
                case "spock":
                    if(cpu === "scissors" || cpu === "rock"){
                        $("#msg").text("YOU WIN");
                        score+=1;
                    }
                    else if(cpu === "paper" || cpu === "lizard"){
                        $("#msg").text("YOU LOSE");
                        score-=1;
                    }
                    else{
                        $("#msg").text("YOU TIED"); 
                    }
                    break;
                    default:
                        console.log("Something went wrong");
                        break;
                    }
                    
                    $("#cpuColor").addClass("invisible");
                    $("#more").addClass("invisible");
                    setTimeout(function(){
                        $("#cpuColor").removeClass("invisible");
                        setTimeout(function(){
                            $("#more").removeClass("invisible");
                            $("#score").text(score);
                        },500);
                    }, 1000);
                }