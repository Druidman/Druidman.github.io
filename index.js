
let gameInstance = null;


function downloadFile(pathToFile, downloadName){
    let a = document.createElement("a")
    a.href = pathToFile
    a.download = downloadName;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
document.getElementById("playButton").addEventListener("click",(event)=>{
    // change to game init type
    console.log("event")
    document.getElementById("welcomeScreen").style.display = "none"
    document.getElementById("gameSelector").style.display = "flex"

})

document.getElementById("returnToHomePage").addEventListener("click",(event)=>{
    // change to welcome screen
    console.log("event")
    document.getElementById("welcomeScreen").style.display = "flex"
    document.getElementById("gameSelector").style.display = "none"

})

document.getElementById("linuxPlayButton").addEventListener("click",(event)=>{
    downloadFile("files/minecraftClone-linux.zip", "minecraftGame-linux.zip")
})
document.getElementById("windowsPlayButton").addEventListener("click",(event)=>{
    downloadFile("files/minecraftClone-win.zip", "minecraftGame-win.zip")
})
document.getElementById("gameSectionReturn").addEventListener("click",(event)=>{
    if (gameInstance && gameInstance.shutdown_game) {
        gameInstance.shutdown_game(); // Call your C++ cleanup function
        gameInstance = null;
      }


    document.getElementById('websiteSection').style.display = "block";
    document.getElementById('gameSection').style.display = "none";
    document.getElementById('gameInfo').style.display = "flex";

   
})
document.getElementById("startGameButton").addEventListener("click",(event)=>{
    document.getElementById('gameInfo').style.display = "none"
    document.getElementById('gameCanvas').style.display = "block"
    document.getElementById('gameCanvas').focus()
    
    MyGame({
        locateFile: function (path, prefix) {
        if (path.endsWith(".data")) {
            return "files/webGame/" + path;
        }
        return prefix + path;
        },
        canvas: document.getElementById('gameCanvas'),
    }).then((instance) => {
      console.log("WASM module loaded.");
      gameInstance = instance;
    });
})
document.getElementById("webPlayButton").addEventListener("click",(event)=>{
    document.getElementById('websiteSection').style.display = "none";
    document.getElementById('gameSection').style.display = "block";
    

})
document.getElementById("macPlayButton").addEventListener("mouseover",(event)=>{
    popInfoBox();
})
document.getElementById("macPlayButton").addEventListener("mouseleave",(event)=>{
    hideInfoBox();
})


document.getElementById("githubLink").addEventListener("click",(event)=>{
    window.open("https://github.com/Druidman/minecraft-clone-opengl", "_blank");
    console.log("GitHub logo clicked");
})

document.getElementById("infoButton").addEventListener("mouseover",(event)=>{
    popInfoBox();
    
})
document.getElementById("infoButton").addEventListener("mouseleave",(event)=>{
    
    document.getElementById("infoBox").style.display = "none"

})

function popInfoBox(){
    let element =  document.getElementById("infoBox")
    element.style.display = "block";
    element.style.position = "absolute"
    let rect = document.getElementById("infoButton").getBoundingClientRect();
    let topPos =  rect.top
    let leftPos =  rect.left + rect.width
    element.style.top = `${topPos}px`
    element.style.left = `${leftPos}px`
}
function hideInfoBox(){
    document.getElementById("infoBox").style.display = "none"
}



