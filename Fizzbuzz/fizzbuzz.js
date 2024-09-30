let result = "";

for (let i = 1; i < 101; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
        result += "fizzbuzz, " ;
    else if ( i % 3 == 0)
        result += "fizz, " ;
    else if ( i % 5 == 0)
        result += "buzz, " ;
    else
        result += `${i}, `
}

document.getElementById('result').innerHTML = `${result}`;

