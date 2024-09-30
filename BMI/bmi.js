function Calculate(event)
{
    event.preventDefault(); 
    const mass = parseFloat(document.getElementById("Mass").value);
    const height = parseFloat(document.getElementById("Height").value);

    const BMI = mass / Math.pow(height, 2);

    document.getElementById("Bmi").innerText = `BMI: ${BMI.toFixed(2)}`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('Bmi').textContent = '';
}