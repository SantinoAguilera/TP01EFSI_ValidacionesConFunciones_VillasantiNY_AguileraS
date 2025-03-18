function verifyMatematica()
{
    let nota = document.getElementById("matematica");

    if(nota.value >= 1 && nota.value <= 10)
    {
        nota.style.color = "green";
    }
    else
    {
        nota.style.color = "red";
    }
}

function verifyLengua()
{
    let nota = document.getElementById("lengua");
    if (nota.value >= 1 && nota.value <= 10)
    {
        nota.style.color = "green";
    }
    else
    {
        nota.style.color = "red";
    }
}

function verifyEFSI()
{
    let nota = document.getElementById("efsi");
    if (nota.value >= 1 && nota.value <= 10)
    {
        nota.style.color = "green";
    }
    else
    {
        nota.style.color = "red";
    }
}

function averageNote()
{
    let matematica = document.getElementById("matematica").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;
    
    matematica = parseFloat(matematica);
    lengua = parseFloat(lengua);
    efsi = parseFloat(efsi)

    let average = (matematica + lengua + efsi) / 3;
    document.getElementById("resultado").innerHTML = 'El promedio de notas es: ' + average;
}

function verifyForm(func)
{
    let matematica = document.getElementById("matematica").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;
    if (matematica > 10 || matematica < 1 || lengua > 10 || lengua < 1 || efsi > 10 || efsi < 1) {
        alert("Los valores tienen que estar entre 1 y 10");
    }
    else{
        switch (func) {
            case 'averageNotes':
                averageNote();
                break;
            case 'highestScore':
                highestScore();
                break;
            default:
                break;
        }
    }
}