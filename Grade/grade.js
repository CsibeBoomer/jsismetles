function Calculate(event)
{
    event.preventDefault(); 
    const grade = parseInt(document.getElementById("Grade").value);

    let result = "";

    switch (grade)
    {
        case 1:
        {
            result = "Your grade in letter is: F";
            break;
        }
        case 2:
        {
            result = "Your grade in letter is: D";
            break;
        }
        case 3:
        {
            result = "Your grade in letter is: C";
            break;
        }
        case 4:
        {
            result = "Your grade in letter is: B";
            break;
        }
        case 5:
        {
            result = "Your grade in letter is: A";
            break;
        }
        default:
        {
            result = "The given grade value is wrong!";
            break;
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}