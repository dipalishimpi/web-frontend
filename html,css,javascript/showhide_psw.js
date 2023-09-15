let eyeIcon=document.getElementById("eyeicon");
let Password=document.getElementById("password");

eyeIcon.onclick = function(){
    if(Password.type == "password"){
        Password.type="text";
        eyeIcon.src= "/images/eye-open.png";
    }
    else{
        Password.type="password";
        eyeIcon.src= "/images/eye-close.png";
    }
}