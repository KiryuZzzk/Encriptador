

function encriptar(textArea){
    let textoTemp="";
    for (char of textArea){
        if(char=='e'){
            textoTemp = textoTemp + "enter";
        }if (char=='i'){
            textoTemp = textoTemp + "imes";
        }if (char=='a'){
            textoTemp = textoTemp + "ai";
        }if (char=='o'){
            textoTemp = textoTemp + "ober";
        }if (char=='u'){
            textoTemp = textoTemp + "ufat";
        }if (char!='e' && char!='i' && char!='a' && char!='o' && char!='u'){
            textoTemp = textoTemp + char;
        }
    }
    return textoTemp;
}


function desencriptar(textArea){
    let textoTemp = "";
    textoTemp = textArea.replaceAll("enter","e");
    textoTemp = textoTemp.replaceAll("imes","i");
    textoTemp = textoTemp.replaceAll("ai","a");
    textoTemp = textoTemp.replaceAll("ober","o");
    textoTemp = textoTemp.replaceAll("ufat","u");
    return textoTemp;
}

let estado = true;

 const buttonT = document.getElementById("buttonT");
 buttonT.addEventListener("click", function() {
    let textArea = document.getElementById("texto").value;
    let textResultado = "";
    if(estado==true){
        textResultado = encriptar(textArea);
    }if(estado==false){
        textResultado = desencriptar(textArea);
    }
    document.getElementById("resultado").innerHTML = textResultado;
    
 });

 const buttonChange = document.getElementById("buttonChange");

 let title = document.getElementById("titulo");
 let section1 = document.getElementById("section1");
 let section2 = document.getElementById("section2");
 let texto = document.getElementById("texto");
 let resultado = document.getElementById("resultado");
 let buttonZone = document.getElementById("buttonZone");
let instruccion = document.getElementById("instruccion");

 buttonChange.addEventListener("click", function() {
   if(estado==true){
    estado=false;
    title.innerHTML = "Desencriptar";
    buttonChange.innerHTML = "Encriptar";
    section1.style.backgroundColor="#e5e5e5";
    texto.style.backgroundColor="#ffffff";
    buttonZone.style.background = "#e5e5e5";
    section2.style.backgroundColor="#14213d";
    resultado.style.backgroundColor="#30436b";
    resultado.style.color="white";
    instruccion.style.color="black";
    texto.style.color="black";

    section1.style.transition= "0.25s all";
    texto.style.transition= "0.25s all";
    buttonZone.style.transition= "0.25s all";
    section2.style.transition= "0.25s all";
    resultado.style.transition= "0.25s all";
    instruccion.style.transition= "0.25s all";
    texto.style.transition= "0.25s all";

   }else{
    estado=true;
    title.innerHTML = "Encriptar";
    buttonChange.innerHTML = "Desencriptar";
    section1.style.backgroundColor="#14213d";
    texto.style.backgroundColor="#30436b";
    buttonZone.style.backgroundColor = "#14213d";
    section2.style.backgroundColor="#e5e5e5";
    resultado.style.backgroundColor="#ffffff";
    instruccion.style.color="white";
    texto.style.color="#ffffff";
    resultado.style.color="black";

    section1.style.transition= "0.25s all";
    texto.style.transition= "0.25s all";
    buttonZone.style.transition= "0.25s all";
    section2.style.transition= "0.25s all";
    resultado.style.transition= "0.25s all";
    instruccion.style.transition= "0.25s all";
    texto.style.transition= "0.25s all";



   }
 });

 const buttonDel = document.getElementById("buttonDel");
    buttonDel.addEventListener("click", function() {
    document.getElementById("texto").value = "";
 });


 const buttonCopy = document.getElementById("buttonCopy");
    buttonCopy.addEventListener("click", function() {
    navigator.clipboard.writeText(resultado.innerHTML);
 });
