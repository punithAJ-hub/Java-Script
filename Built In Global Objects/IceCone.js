let eat=()=>{
    if(document.getElementById("p1").innerHTML=="click here to refil")
    return refil();
    else
    return ate();


}


let ate=()=>{
    document.getElementById("img1").setAttribute('src','EMPTYCONE.png');
    document.getElementById("hdr1").innerHTML="Hope you liked it";
    document.getElementById("p1").innerHTML="click here to refil";
    document.body.style.backgroundColor = "lightblue";
}

let refil=()=>{
    document.getElementById("img1").setAttribute('src','FULLCONE.png');
    document.getElementById("hdr1").innerHTML="Here is your ice cream";
    document.getElementById("p1").innerHTML="Enjoy yourself";
    document.body.style.backgroundColor = "green";
}