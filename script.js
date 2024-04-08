const texto1 = document.getElementById("text1")
const texto2 = document.getElementById("text2")
const botao1 = document.getElementById("1")
const botao2 = document.getElementById("2")
const setaparacima1 = document.getElementById("seta1")
const setaparacima2 = document.getElementById("seta2")

botao1.addEventListener("click", function() {
    if (texto1.style.display === "none") {
        texto1.style.display = "block";
        setaparacima1.classList.remove("fa-arrow-down");
        setaparacima1.classList.add("fa-arrow-up");
    } else {
        texto1.style.display = "none";
        setaparacima1.classList.remove("fa-arrow-up");
        setaparacima1.classList.add("fa-arrow-down");
    }
});

botao2.addEventListener("click", function(){
    if(texto2.style.display === "none"){
        texto2.style.display = "block"
        setaparacima2.classList.remove("fa-arrow-down")
        setaparacima2.classList.add("fa-arrow-up")

    } else {
        texto2.style.display = "none"
        setaparacima2.classList.remove("fa-arrow-up")
        setaparacima2.classList.add("fa-arrow-down")
        

    }


} )




