
const TX = document.querySelector ("#TXprincipal");
const img = document.querySelector ("#imagempri");
const botao = document.querySelector  ("#btn");


btn.addEventListener ("click", function () { 
    if (botao.value  == 'primeiro'){
        TX.innerText = "Html"
        botao.value  = 'segundo'
        img.src      = "img/html.png"   }

    else if (botao.value == "segundo"){
        TX.innerText = "JavaScript"
        botao.value  = "terceiro"
        img.src      = "img/js.png" }

    else {
        TX.innerText = "Css"
        botao.value  = "primeiro"
        img.src      = "img/css.png"}
  });
