function verifyMatematica(){
    let nota = document.getElementById("matematica");
    if(nota.value >= 1 && nota.value <= 10){
        nota.style.color = "green";
    }
    else{
        nota.style.color = "red";
    }
}
function verifyLengua(){
    let nota = document.getElementById("lengua");
    if(nota.value >= 1 && nota.value <= 10){
        nota.style.color = "green";
    }
    else{
        nota.style.color = "red";
    }
}
function verifyEFSI(){
    let nota = document.getElementById("efsi");
    if(nota.value >= 1 && nota.value <= 10){
        nota.style.color = "green";
    }
    else{
        nota.style.color = "red";
    }
}
function verifyForm()
{
    const matematica = document.getElementById("matematica").value;
    const lengua = document.getElementById("lengua").value;
    const efsi = document.getElementById("efsi").value;
}