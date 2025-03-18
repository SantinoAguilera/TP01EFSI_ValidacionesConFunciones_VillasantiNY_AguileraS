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
function averageNotes()
{
    const matematica = document.getElementById("matematica").value;
    const lengua = document.getElementById("lengua").value;
    const efsi = document.getElementById("efsi").value;
    let error = false;

    if (matematica.trim().length === 0)
    {
        error = true;
        console.log("Error: matematica Has No Value")
    }

    if (lengua.trim().length === 0)
    {
        error = true;
        console.log("Error: lengua Has No Value")
    }

    if (efsi.trim().length === 0)
    {
        error = true;
        console.log("Error: efsi Has No Value")
    }

    if (!error)
    {
        let average = matematica + lengua + efsi;
        document.getElementById("div").innerHTML = "El promedio de notas es: " + average;
    }
}