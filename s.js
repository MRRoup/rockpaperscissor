window.onload = function() {  
    setTimeout(() => {
        body.style.background = "rgb(255 237 43)"
        setTimeout(() => {
            main.style.margin = "0 auto"
            setTimeout(() => {
                main.style.filter = "blur(3px) brightness(0.5)"
                game.style.marginTop = "0"
                setTimeout(() => {
                    player.style.left=0;
                    player.style.top=0;
                    robot.style.right=0;
                    robot.style.top=0;
                    setTimeout(() => {
                        hands.style.top="55%"
                        setTimeout(() => {
                            rock.style.transform = "rotateZ(-30deg) translate(-105px, 40px)"
                            rock.style.transformOrigin = "left bottom"
                            scissors.style.transform = "rotateZ(30deg) translate(105px, 40px)"
                            scissors.style.transformOrigin = "right bottom"
                        }, 1000);
                    }, 1500);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};
let playerPoint = 0
let BotPoint = 0
const gameMech = (player)=>{
    
    boob = ["Rock","Paper","Scissors"]
    const randomNum = Math.floor(Math.random() * 3);
    botMove = boob[randomNum]
    console.log(player)
    console.log(botMove);
    setTimeout(() => {
        playerLogo.style.filter = "brightness(1)"
        setTimeout(() => {
            playerLogo.src="resource/"+player+".png"
        }, 800);
        setTimeout(() => {
            botLogo.style.filter = "brightness(1)"
            setTimeout(() => {
                botLogo.src="resource/"+botMove+".png"
            }, 800);
        }, 2000);
    }, 2000);

    setTimeout(() => {
        if(player == botMove){
            console.log("TIE");
            
        }
        else if(player == "Rock"){
            if(botMove == "Paper"){
                BotPoint+=1
            }
            else if(botMove == "Scissors"){
                playerPoint+=1
            }
            
        }
        else if(player == "Paper"){
            if(botMove == "Scissors"){
                BotPoint+=1
            }
            else if(botMove == "Rock"){
                playerPoint+=1
            }
        }
        else if(player == "Scissors"){
            if(botMove == "Rock"){
                BotPoint+=1
            }
            else if(botMove == "Paper"){
                playerPoint+=1
            }
        }
        playerLogo.src="resource/PlayerCard.png"
        botLogo.src="resource/BotCard.png"
        playerLogo.style.filter = "brightness(0.4)"
        botLogo.style.filter = "brightness(0.4)"
        playerP.innerHTML = "Player: "+playerPoint
        roboP.innerHTML = "JIM: "+BotPoint

        rock.style.transform = "rotateZ(-30deg) translate(-105px, 40px)"
        rock.style.marginTop = "0";
        paper.style.marginTop = "0";
        scissors.style.transform = "rotateZ(30deg) translate(105px, 40px)"
        scissors.style.marginTop = "0";

    }, 7000);
    
}

setTimeout(() => {
    rock.onclick = () => {
        // console.log("Rock")
        rock.style.transform = "rotateZ(0deg)"
        paper.style.marginTop = "0";
        scissors.style.marginTop = "0";
        setTimeout(() => {
            rock.style.marginTop = "100vh"
            scissors.style.transform = "rotateZ(30deg) translate(105px, 40px)"
        },1000);
        gameMech("Rock")
    }
    paper.onclick = () => {
        // console.log("Paper")
        paper.style.marginTop = "100vh"
        rock.style.marginTop = "0";
        scissors.style.marginTop = "0";
        setTimeout(() => {
            rock.style.transform = "rotateZ(-30deg) translate(-105px, 40px)"
            scissors.style.transform = "rotateZ(30deg) translate(105px, 40px)"
        },1000);
        gameMech("Paper")

    }
    scissors.onclick = () => {
        // console.log("Scissors")
        scissors.style.transform = "rotateZ(0deg)"
        paper.style.marginTop = "0";
        rock.style.marginTop = "0";
        setTimeout(() => {
            scissors.style.marginTop = "100vh"
            rock.style.transform = "rotateZ(-30deg) translate(-105px, 40px)"
        },1000);
        gameMech("Scissors")
    }
}, 7500);
