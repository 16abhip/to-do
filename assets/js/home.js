var d = new Date();
console.log(d.getHours());
if(d.getHours() >= 12 && d.getHours() < 18)
{
    document.getElementsByClassName('greet_user')[0].textContent = 'GOOD AFTERNOON';
}
if(d.getHours() >= 18)
{
    document.getElementsByClassName('greet_user')[0].textContent = 'GOOD NIGHT';
}

if(d.getDate() <= 12){
    document.getElementsByClassName('greet_user')[0].textContent = 'GOOD MORNING';
}