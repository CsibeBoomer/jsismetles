let result = "";
let baseRule = 1
let ruleNow = 1;

for (let i = 1; i < 101; i++)
{
    if (i % 3 == 0 && baseRule == ruleNow)
    {
        baseRule++; 
        ruleNow = 1;
        continue;
    }
    else if (i % 3 == 0 )
    {
        ruleNow++;
        result += `${i}, `;
    }
    else
        result += `${i}, `;
}

document.getElementById('result').innerHTML = `${result}`;

