document.addEventListener('DOMContentLoaded', function() {

    
////////////////   ⁡⁢⁣⁣Ovo je kod za testiranje sajta⁡
    // $(".loadDiv").css("display", "none");
    // $(".latice").css("display", "none");
    
    // $(".hero").css("opacity", "1");
    // $(".mainPanel").css("filter",`none`);
    // localStorage.setItem("brojac","prikazi");

///////////////////////

    $(".mainPanel").css("opacity","1");
    $(".loadDiv").css("opacity", "1");
window.addEventListener('load', function () {
    if(this.localStorage.getItem("brojac")=="nePrikazi")
        {
            $(".loadDiv").css("display", "none");
            $(".latice").css("display", "none");
            
            $(".hero").css("opacity", "1");
            $(".mainPanel").css("filter",`none`);
        
            $(".mainPanel").css("display","none");
            console.log("Nesto 2")
        }
});


///////  ⁡⁢⁣⁣⁡⁢⁣⁣𝗟𝗼𝗮𝗱 𝗮𝗻𝗶𝗺𝗮𝗰𝗶𝗷𝗮 𝘇𝗮 𝗹𝗮𝘁𝗶𝗰𝗲 𝗶 𝗼𝘀𝘁𝗮𝗹𝗼⁡

function load() {
    $(".latice").css("opacity", "0");
    $(".loadDiv").css("opacity", "0");
    $(".hero").css("opacity", "1");
    setTimeout(() => {
        $(".mainPanel").css("filter",`none`);
    }, 500);
    setTimeout(() => {
        $(".latice").css("display","none");
        $(".loadDiv").css("display","none");
    }, 2000);
}
setTimeout(() => {
    load();
}, 7000);


//////// ⁡⁢⁣⁣𝗢𝘃𝗼 𝘃𝗿𝗮𝗰𝗮 𝗴𝗶𝗳 𝗻𝗮 𝗽𝗼𝗰𝗲𝘁𝗮𝗸 𝗸𝗮𝗱𝗮 𝗿𝗲𝗳𝗿𝗲𝘀𝘂𝗷𝗲𝗺 𝘀𝘁𝗿𝗮𝗻𝗶𝗰𝘂 ⁡
$(document).ready(function() {
  var gifElement = $("#latice");
  var timestamp = new Date().getTime(); // trenutno vreme u milisekundama
  var noviSrc = gifElement.attr('src') + '?' + timestamp;
  gifElement.attr('src', noviSrc);
});
///////////////////////////////////////////////////////////////////// 








$("#loadTitle").mouseenter(()=>{
    $("#loadTitle").css("background-color","var(--boja3)");
})

$("#loadTitle").mouseleave(()=>{
    $("#loadTitle").css("background-color","transparent");
})
$("#loadTitle").click(()=>{
    window.open("https://github.com/CofiShachou?tab=repositories");
})


let dole=$(".dole");

dole.mouseenter(()=>{
    dole.css("transform","scale(150%)")
    dole.css("background-color","var(--boja3)");
    $(".strelica").css("color","var(--boja1)");
    $(".strelica").css("transform","scale(100%)");
})

dole.mouseleave(()=>{
    dole.css("transform","scale(70%)")
    dole.css("background-color","transparent");
    $(".strelica").css("color","var(--boja3)");
    $(".strelica").css("transform","scale(70%)");
})

dole.click(()=>{
        $(".mainPanel").css({"margin-top":"-100vh" , "transition-duration":"1.5s"});
        localStorage.setItem("brojac","nePrikazi");
        setTimeout(() => {
            $(".mainPanel").css("display","none");
        }, 2000);
})





});