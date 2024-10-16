
// $("body").css("background-color", "var(--boja3)");
// $(".onoKaoBasSve").css("opacity", "1");
// $(".latice").css("display", "none");
// $(".pozadina").css("opacity",`1`);
// $(".pozadina2").css("opacity",`0`);
// $(".onoKaoBasSve").css("display", "block");
// $(".made").css("display", "none");


///////  ⁡⁢⁣⁣𝗟𝗼𝗮𝗱 𝗮𝗻𝗶𝗺𝗮𝗰𝗶𝗷𝗮 𝘇𝗮 𝗹𝗮𝘁𝗶𝗰𝗲 𝗶 𝗼𝘀𝘁𝗮𝗹𝗼⁡
setTimeout(() => {
    function load() {
        $(".latice").css("opacity", "0");
        setTimeout(() => {
            $(".pozadina").css("opacity",`1`);
            setTimeout(() => {
                $(".pozadina2").css("opacity",`0`);
            }, 500);
            $(".onoKaoBasSve").css("display", "block");
            setTimeout(() => {
                $(".onoKaoBasSve").css("opacity", "1");
            }, 200);
            $("body").css("background-color", "var(--boja3)");
            $(".made").css("display", "none");
        }, 500);
    }
    document.onload = load();
    setTimeout(() => {
        $(".latice").css("display", "none");
        
    }, 2000);
}, 10000);


// ⁡⁢⁣⁣𝗢𝘃𝗼 𝘃𝗿𝗮𝗰𝗮 𝗴𝗶𝗳 𝗻𝗮 𝗽𝗼𝗰𝗲𝘁𝗮𝗸 𝗸𝗮𝗱𝗮 𝗿𝗲𝗳𝗿𝗲𝘀𝘂𝗷𝗲𝗺 𝘀𝘁𝗿𝗮𝗻𝗶𝗰𝘂 ////////////⁡
$(document).ready(function() {
  var gifElement = $("#l");
  var timestamp = new Date().getTime(); // trenutno vreme u milisekundama
  var noviSrc = gifElement.attr('src') + '?' + timestamp;
  gifElement.attr('src', noviSrc);
});
///////////////////////////////////////////////////////////////////// 

$("#krug").mouseenter(()=>{
    $("#krug").css("background-color","var(--boja3)");
    // $("#krug > * ,span").css("color","var(--boja1)");
})

$("#krug").mouseleave(()=>{
    $("#krug").css("background-color","transparent");
    // $("#krug > * ,span").css("color","var(--boja3)");
})
$("#krug").click(()=>{
    window.open("https://github.com/CofiShachou?tab=repositories");
})


let dole=$(".dole");
dole.mouseenter(()=>{
    // dole.css({"width":"8rem","height":"8rem"});
    dole.css("transform","scale(150%)")
    dole.css("background-color","var(--boja3)");
    dole.css("margin-top","15rem");
    $(".strelica").css("color","var(--boja1)");
    $(".strelica").css("transform","scale(100%)");
    // $(".strelica").css("font-size","100px");
})

dole.mouseleave(()=>{
    // dole.css({"width":"3rem","height":"3rem"});
    dole.css("transform","scale(70%)")
    dole.css("background-color","transparent");
    dole.css("margin-top","15rem");
    $(".strelica").css("color","var(--boja3)");
    $(".strelica").css("transform","scale(70%)");
    // $(".strelica").css("font-size","30px");
})

dole.click(()=>{
    var ciljniElement = document.getElementById('mapa');
    ciljniElement.scrollIntoView({ behavior: 'smooth' });
})

let dole2=$(".dole2");
dole2.mouseenter(()=>{
    // dole.css({"width":"8rem","height":"8rem"});
    dole2.css("transform","scale(150%)")
    dole2.css("background-color","var(--boja3)");
    // dole2.css("margin-top","15rem");
    $(".strelica2").css("color","var(--boja1)");
    $(".strelica2").css("transform","scale(100%)");
    // $(".strelica").css("font-size","100px");
})

dole2.mouseleave(()=>{
    // dole.css({"width":"3rem","height":"3rem"});
    dole2.css("transform","scale(70%)")
    dole2.css("background-color","transparent");
    // dole2.css("margin-top","15rem");
    $(".strelica2").css("color","var(--boja3)");
    $(".strelica2").css("transform","scale(70%)");
    // $(".strelica").css("font-size","30px");
})

dole2.click(()=>{
    var ciljniElement = document.getElementById('body');
    ciljniElement.scrollIntoView({ behavior: 'smooth' });
})
///

gore=$(".gore");
gore.mouseenter(()=>{
    // dole.css({"width":"8rem","height":"8rem"});
    gore.css("transform","scale(150%)")
    gore.css("background-color","var(--boja3)");
    // dole2.css("margin-top","15rem");
    $(".strelica3").css("color","var(--boja1)");
    $(".strelica3").css("transform","scale(100%)");
    // $(".strelica").css("font-size","100px");
})

gore.mouseleave(()=>{
    // dole.css({"width":"3rem","height":"3rem"});
    gore.css("transform","scale(70%)")
    gore.css("background-color","transparent");
    // dole2.css("margin-top","15rem");
    $(".strelica3").css("color","var(--boja3)");
    $(".strelica3").css("transform","scale(70%)");
    // $(".strelica").css("font-size","30px");
})

gore.click(()=>{
    var ciljniElement = document.getElementById('pozadina');
    ciljniElement.scrollIntoView({ behavior: 'smooth' });
})



centar=$(".centar");
centar.mouseenter(()=>{
    // dole.css({"width":"8rem","height":"8rem"});
    centar.css("transform","scale(150%)")
    centar.css("background-color","var(--boja3)");
    // dole2.css("margin-top","15rem");
    $("#centar").css("color","var(--boja1)");
    $("#centar").css("transform","scale(100%)");
    // $(".strelica").css("font-size","100px");
})

centar.mouseleave(()=>{
    // dole.css({"width":"3rem","height":"3rem"});
    centar.css("transform","scale(70%)")
    centar.css("background-color","transparent");
    // dole2.css("margin-top","15rem");
    $("#centar").css("color","var(--boja3)");
    $("#centar").css("transform","scale(70%)");
    // $(".strelica").css("font-size","30px");
})

centar.click(()=>{
    var ciljniElement = document.getElementById('mapa');
    ciljniElement.scrollIntoView({ behavior: 'smooth' });
})
