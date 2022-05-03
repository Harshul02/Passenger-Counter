// document.getElementById("count-el").innerHTML=5;
// let count=0;
// count=3;
// console.log(count);
let count=0;
function increment()
{
    count++;
    document.getElementById("count-el").innerHTML=count;
}

function save(){
    document.getElementById("save-el").textContent += count + " - ";
    count =0;
    document.getElementById("count-el").textContent=0;
}