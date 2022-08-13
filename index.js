
const hourEl= document.getElementById("hour");
const minuteEl= document.getElementById("minutes");
const secondEl= document.getElementById("Seconds");
const ampmEl=document.getElementById("ampm");

function updateClock(){

    const d = new Date();
    let h =d.getHours();
    let m= d.getMinutes();
    let s= d.getSeconds();
    let ampm1 ="AM";
    if(h>12){
        h=h-12;
        ampm1 ="PM";
    }
    hourEl.innerText=h;
    secondEl.innerText=s;
    minuteEl.innerText=m;
    ampmEl.innerText=ampm1;
 setTimeout(()=>{
 updateClock()},1000);
}
