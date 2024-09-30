function Calculate(event)
{
    event.preventDefault(); 
    const first = parseInt(document.getElementById("First").value);
    const second = parseInt(document.getElementById("Second").value);

    let result = "";

   if (first == second)
        result = "The game is a tie.";
    else if ((first == 1 && second == 3) || (first == 2 && second == 1) || (first == 3 && second == 2))
        result = "The first player wins.";
    else
        result = "The second player wins.";
        
    document.getElementById("result").innerText = result;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('Surface').textContent = '';
    document.getElementById('Volume').textContent = '';
}