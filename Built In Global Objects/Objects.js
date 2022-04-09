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

function ageValidator()
{
    
    let reg=new RegExp("[0-100]");
    let age=document.getElementById("age").value;
    console.log(age);
    console.log(reg.test(age))


    if(!reg.test(age))
    {
        document.getElementById("ageError").innerHTML="Age should be a number";
    }
    else{
        document.getElementById("ageError").innerHTML="";
    }

    

    
}