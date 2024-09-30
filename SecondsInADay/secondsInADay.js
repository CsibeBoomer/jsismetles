function Calculate(event)
{
    event.preventDefault(); 
    const hours = parseInt(document.getElementById("Hour").value);
    const minutes = parseInt(document.getElementById("Minutes").value);
    const seconds = parseInt(document.getElementById("Seconds").value);

    const maxHours = 23;
    const maxMinutes = 59;
    const maxSeconds = 59;

    let result = 0;

    result = (maxHours - hours) * 3600 + (maxMinutes-minutes) * 60 + maxSeconds - seconds;

    document.getElementById("result").innerText = `The remaining seconds of the day: ${result}`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}