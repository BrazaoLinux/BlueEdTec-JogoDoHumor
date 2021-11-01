
const TX = document.querySelector ("#TXprincipal");
const img = document.querySelector ("#imagempri");
const botao = document.querySelector  ("#btn");


btn.addEventListener ("click", function () { 
    if (botao.value  == 'primeiro'){
        TX.innerText = "texto\n medo\n asdfasdfasdo!"
        botao.value  = 'segundo'
        img.src      = "img/html.png"   }

    else if (botao.value == "segundo"){
        TX.innerText = "texto\n qwerqeqrwe\n asdfasdfasdo!"
        botao.value  = "terceiro"
        img.src      = "img/js.png" }

    else {
        TX.innerText = "texto\n dafdasfa\n asdfasdfasdo!"
        botao.value  = "primeiro"
        img.src      = "img/css.png"}
  });