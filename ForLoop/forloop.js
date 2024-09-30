function Calculate(event)
{
    event.preventDefault(); 
    const word = document.getElementById("Word").value;

    for (let i = 0; i < word.length; i++)
    {
        document.getElementById("result").innerHTML += `${word.charAt(i)} <br>`;
    }
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}