const roles = [

"Junior Software Developer",

"Frontend Developer",

"JavaScript Developer",

"Problem Solver"

];

let index = 0;

setInterval(()=>{

document.getElementById("typing").innerHTML=roles[index];

index++;

if(index==roles.length){

index=0;

}

},2000);