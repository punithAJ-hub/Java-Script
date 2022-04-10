console.log("hii");
var color="";
var count=0;
document.getElementById("b").innerHTML="Chnage color to yellow";
document.getElementById("class1").attributes[0].value;

window.onload=function(){
    document.getElementById("class1").setAttribute('class','elm');
}

let changecolor=function()
{
    let color1="yellow";
    let color2="black";
  count++;

  if(count%2==0){
  color=color2;
  document.getElementById("b").innerHTML="Chnage color to "+ color1;
  document.getElementById("class2").style.color= color;
  }
  else{
  color=color1;
  document.getElementById("b").innerHTML="Chnage color to "+ color2                    ;
  document.getElementById("class2").style.color= color;
  }
  
    
 
}

