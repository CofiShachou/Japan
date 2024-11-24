document.addEventListener('DOMContentLoaded', function() {

let visinaHeadera=$("#header").height();
let visinaEkrana=$("#latice").height();

let pomerajNaGore=visinaHeadera-visinaEkrana+20;

console.log("visina headera= ",visinaHeadera);
console.log("visina ekrana= ",visinaEkrana);
console.log("Pomeraj je za= ",pomerajNaGore);



////////////////   ⁡⁢⁣⁣Ovo je kod za testiranje sajta⁡
    // $(".loadDiv").css("display", "none");
    // $(".latice").css("display", "none");
    
    // $(".hero").css("opacity", "1");
    // localStorage.setItem("brojac","prikazi");
    

///////////////////////

$("#logo").click(()=>{
    localStorage.setItem("brojac","prikazi");
})

window.addEventListener('load', function () {
    if(this.localStorage.getItem("brojac")=="nePrikazi")
        {
            $(".loadDiv").css("display", "none");
            $(".latice").css("display", "none");
            
            $(".hero").css("opacity", "1");
            $(".mainPanel").css("filter",`none`);
        
            $(".mainPanel").css({"margin-top":+pomerajNaGore+ "px", "transition-duration":"0s"});
            $("body").css("overflow-y","visible")
            $("#header").css("disaply","flex");
            setTimeout(() => {
                $("#header").css("opacity","1");
            }, 10);



        }
        else{
            $("body").css("overflow-y","hidden");
            $("#header").css("opacity","0");
            setTimeout(() => {
                $("#header").css("disaply","none");
            }, 500);
            $(".mainPanel").css("opacity","1");
            $(".loadDiv").css("opacity", "1");  
            window.scrollTo(0,0);
            // $(".mainPanel").css("opacity","0");
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
    }, 1500);
}
setTimeout(() => {
    load();
}, 10000);


//////// ⁡⁢⁣⁣𝗢𝘃𝗼 𝘃𝗿𝗮𝗰𝗮 𝗴𝗶𝗳 𝗻𝗮 𝗽𝗼𝗰𝗲𝘁𝗮𝗸 𝗸𝗮𝗱𝗮 𝗿𝗲𝗳𝗿𝗲𝘀𝘂𝗷𝗲𝗺 𝘀𝘁𝗿𝗮𝗻𝗶𝗰𝘂 ⁡
$(document).ready(function() {
//   var gifElement = $("#latice");
//   var timestamp = new Date().getTime(); // trenutno vreme u milisekundama
//   var noviSrc = gifElement.attr('src') + '?' + timestamp;
//   gifElement.attr('src', noviSrc);
});
///////////////////////////////////////////////////////////////////// 








$("#loadTitle").mouseenter(()=>{
    $("#loadTitle").css("background-color","var(--primary1)");
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
    dole.css("background-color","var(--primary1)");
    $(".strelica").css("color","var(--secondary2)");
    $(".strelica").css("transform","scale(100%)");
})

dole.mouseleave(()=>{
    dole.css("transform","scale(70%)")
    dole.css("background-color","transparent");
    $(".strelica").css("color","var(--primary1)");
    $(".strelica").css("transform","scale(70%)");
})

dole.click(()=>{
        $(".mainPanel").css({"margin-top":+pomerajNaGore+ "px", "transition-duration":"1.5s"});
        $("#header").css("opacity","1");
        localStorage.setItem("brojac","nePrikazi");
        setTimeout(() => {
            // $(".mainPanel").css("display","none");
            $("body").css("overflow-y","visible")
        }, 2000);
})

$(".galerijaLink").mouseenter(()=>{
    $(".ostaleGalerije").css("display","flex")
    setTimeout(() => {
        $(".ostaleGalerije").css("opacity","1")
    }, 1);
})
$(".galerijaLink").mouseleave(()=>{
    $(".ostaleGalerije").css("opacity","0")
    setTimeout(() => {
        $(".ostaleGalerije").css("display","none")
    }, 500);
})

////////////// Dodavanje skrola na dole za home

$(".clickScroll").click(function(){
    switch ($(this).text()){
        case "Opste":window.scrollTo(0,$("#opste").offset().top-140);break;
        case "Geografski polozaj":window.scrollTo(0,$("#gp").offset().top-140);break;
        case "Reljef":window.scrollTo(0,$("#reljef").offset().top-140);break;
        case "Istorija":window.scrollTo(0,$("#istorija").offset().top-140);break;
        case "Hrana":window.scrollTo(0,$("#hrana").offset().top-140);break;
        case "Kultura":window.scrollTo(0,$("#kultura").offset().top-140);break;
    }
})

//////////////////  ⁡⁢⁣⁣Galerija⁡    ///////////////////

$(".galerijaWrap").css("margin-top",visinaHeadera+20);

/////////////////// ⁡⁢⁣⁣Prijava⁡    ///////////////////

$(".prijavaWrap").css("margin-top",visinaHeadera+20);


//////////////////// ⁡⁢⁣⁣O Autoru⁡    ///////////////////
$(".oWrap").css("margin-top",visinaHeadera+20);


});