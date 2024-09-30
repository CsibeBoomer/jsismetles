let start = 10;
let divisors = "";

while (start < 31)
{
    for (let i = 2; i < 31; i++)
    {
        if (start % i == 0)
            divisors += `${i}, `;
    }
    document.getElementById("result").innerHTML += `${start}:  ${divisors} <br>`;
    divisors = "";
    start++;
}