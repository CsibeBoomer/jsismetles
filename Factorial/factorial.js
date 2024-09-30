function Calculate(event)
{
    event.preventDefault(); 
    const number = parseInt(document.getElementById("Number").value);
    let result = 1;

    for (let i = number; i > 0; i--)
        result *= i;

    document.getElementById('result').innerText = ` ${number} factorial is ${result}.`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}