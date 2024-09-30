function Calculate(event)
{
    event.preventDefault(); 
    const word = document.getElementById("Word").value;

    for (let i = 0; i < word.length; i++)
    {
        let char = word.charCodeAt(i);
        if ((char >= 65 && char < 91) || (char >= 97 && char < 123))
            document.getElementById("result").innerHTML += `${word.charAt(i)} <br>`;
        else
            break;
    }
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}