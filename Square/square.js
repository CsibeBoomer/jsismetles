function Calculate(event)
{
    event.preventDefault(); 
    const number = parseInt(document.getElementById("Number").value);

    let startEndStr = `${"%".repeat(number)}<br>`;
    let result = startEndStr;
    let placeOfCharacter = 1;

    for (let y = 0; y < number-2; y++)
    {
        let line = "";

        for (let i = 0; i < number; i++)
        {
            if (i == 0 || i == placeOfCharacter || i == number-1)
                line += "%";
            else
                line += "&nbsp";
        
        }
        result += (line + "<br>");
        placeOfCharacter++;
    }
    
    document.getElementById('result').innerHTML = `${result + startEndStr}`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}