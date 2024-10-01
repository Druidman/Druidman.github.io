// var button = document.getElementById("change_words");

// button.onclick = function(){
//     var listItems = document.querySelectorAll("#words li");
//     listItems.forEach(function(li) {
//         var paragraphs = Array.from(li.querySelectorAll("p"));
//         paragraphs.reverse().forEach(function(p) {
//             li.appendChild(p);
//         });
//     });

//     var element = document.getElementById("words")
//     var espas = document.getElementsByClassName("espanol");
//     var polas = document.getElementsByClassName("polish");
//     var class_ele = element.classList[0]

//     if (class_ele == "original"){
//         var values = {"espas": "end","polas": "start"}
//         element.classList.remove("original")
//         element.classList.add("next")
        


        
//     }
//     else{
//         var values = {"espas": "start","polas": "end"}
//         element.classList.remove("next")
//         element.classList.add("original")
//         var len = espas.length
//         for (var i=0; i<length;i++ ){
//             espas[i].classList.add("left")
//         }
//         var len = polas.length
//         for (var i=0; i<length;i++ ){
//             polas[i].classList.remove("left")
//         }
//     }


   
    
//     var len = espas.length;
//     for (var i=0; i<len; i++){
//         espas[i].style.justifyContent = values["espas"];
//     }

    
//     var len = polas.length;
//     for (var i=0; i<len; i++){
//         polas[i].style.justifyContent = values["polas"];
//         polas[i].style.color = values["polas"];
//     }

// }