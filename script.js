const img = document.getElementById("reaction");
function verify(input)
{
    let nota = document.getElementById(input);
    if (nota.value >= 1 && nota.value <= 10)
    {
        nota.style.color = "green";
    }
    else if(!nota.value)
    {
        nota.style.color = "black";
    }
    else{
        nota.style.color = "red";
    }
}

function verifyForm(func)
{
    let matematica = document.getElementById("matematica").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;

    if (matematica > 10 || matematica < 1 || lengua > 10 || lengua < 1 || efsi > 10 || efsi < 1)
    {
        alert("Los valores tienen que estar entre 1 y 10");
    }
    else
    {
        switch (func)
        {
            case 'averageNote':
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

function averageNote()
{
    let matematica = document.getElementById("matematica").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;

    matematica = parseFloat(matematica);
    lengua = parseFloat(lengua);
    efsi = parseFloat(efsi);

    let average = (matematica + lengua + efsi) / 3;
    document.getElementById("resultado").innerHTML = 'El promedio de notas es: ' + average;
}

function highestScore()
{
    let matematica = document.getElementById("matematica").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;
    let bestScore = "";

    matematica = parseFloat(matematica);
    lengua = parseFloat(lengua);
    efsi = parseFloat(efsi);
    
    document.getElementById("resultado").style.color = "blue";
    if (matematica == lengua && matematica == efsi)
    {
        document.getElementById("resultado").innerHTML = 'Todas las notas son iguales.';
    }
    else
    {
        if (matematica >= lengua && matematica >= efsi)
        {
            if (bestScore == "")
            {
                bestScore = "Matematica"
            }
        }

        if (lengua >= matematica && lengua >= efsi)
        {
            if (bestScore == "")
            {
                bestScore = "Lengua"
            }
            else
            {
                bestScore += " y Lengua"
            }
        }

        if (efsi >= lengua && efsi >= matematica)
        {
            if (bestScore == "")
            {
                bestScore = "EFSI"
            }
            else
            {
                bestScore += " y EFSI"
            }
        }



        document.getElementById("resultado").innerHTML = 'Las mejores notas fueron: ' + bestScore;
    }
}