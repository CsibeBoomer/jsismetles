function Calculate(event)
{
    event.preventDefault(); 
    const year = parseInt(document.getElementById("Year").value);

    let isItLeapYear = "";

    if (year % 4  == 0 && year % 100 != 0)
        isItLeapYear = "A leap year";
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
        isItLeapYear = "A leap year";
    else
        isItLeapYear = "Not a leap year";

    document.getElementById("leapYear").innerText = `The year is: ${isItLeapYear}`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('leapYear').textContent = '';
}