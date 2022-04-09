console.log("hii");
let lastLoggedIn="";

function ageConfirm()
{
    let age=document.getElementById("age").value;

    console.log(age);
    
    confirm("Want to see last logged in timestamp");
    let now=new Date();
    console.log("now"+ now);
    document.getElementById("date").innerHTML=lastLoggedIn;
    lastLoggedIn=new Date();



}