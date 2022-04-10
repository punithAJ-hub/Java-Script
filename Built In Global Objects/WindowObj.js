
document.getElementById("height").innerHTML="Height of the window "+ window.innerHeight;

document.getElementById("width").innerHTML="width of the window "+ window.innerWidth;
document.getElementById("width").innerHTML="Navigator info " + navigator.appName;

let nextpage=()=>{
    window.open("https://www.w3schools.com/js/js_output.asp");
}

let signin=function(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);

    alert("Successfully signed in");

    document.location.reload();
}

let login=()=>{
    let name1=localStorage.getItem('name');
    let age1=localStorage.getItem('age');

    console.log(document.getElementById("name").value);
    console.log(document.getElementById("age").value);
    let cond=(name1==document.getElementById("name").value && parseInt(age1)==parseInt(document.getElementById("age").value));
    console.log(cond)

    if(cond)
    {
        window.open("https://www.w3schools.com/js/js_output.asp");
    }

    else
    alert("Please sign in and the log in ididot")
}

let back=()=>{
    history.back();
}