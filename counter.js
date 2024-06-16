let number = document.getElementById("num");
function dec()
{
    let currentnum = parseInt(number.textContent);
    let updatednum = currentnum-1;
    number.textContent = updatednum;
    if (updatednum<0)
    {
        number.style.color="red";
    }
    else if (updatednum>0)
    {
        number.style.color="green";
    }
    else
    {
        number.style.color="black";
    }
}
function reset()
{
    number.textContent = 0;
    number.style.color="black";
}
function inc()
{
    let currentnum = parseInt(number.textContent);
    let updatednum = currentnum+1;
    number.textContent = updatednum;
    if (updatednum<0)
    {
        number.style.color="red";
    }
    else if (updatednum>0)
    {
        number.style.color="green";
    }
    else
    {
        number.style.color="black";
    }
}