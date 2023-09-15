// console.log("hello world")
// console.log(document.querySelector("textarea"))
// const ul=document.querySelector('.my-list')
// //ul.remove()
// //ul.lastElementChild.remove()
// ul.firstElementChild.textContent="first item"
// ul.children[1].innerText="brand"
// ul.lastElementChild.innerHTML="<h1>hello  text</h1>"

// const btn=document.querySelector(".submit");
// btn.style.background='red'
// btn.addEventListener("click", (e) =>{
//     e.preventDefault();
//     document.querySelector("#myform").style.background="#ccc";
// });

const myform=document.querySelector("#myform");
const name=document.querySelector("#name");
const email=document.querySelector("#email");
const msg=document.querySelector(".msg");
const users=document.querySelector("#users");

myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (name.value ==="" || email.value===""){
        msg.classList.add('error');
        msg.innerHTML="please enter all fields";
        setTimeout(() => msg.remove(),3000);
    }
    else{
       const li=document.createElement('li') ;
       li.appendChild(document.createTextNode("name "+name.value +"email "+email.value));
       users.appendChild(li);
       //clear the fields
       name.value="";
       email.value="";
    }
}



// var arrresult=[];
// function double(arrresult) {
//     for(let i in arrresult){
        
//         arrresult[i]=(arrresult[i]*2);
        
//     }
//     return arrresult;
// }
// console.log(arrresult);
// double([1,2,3]);


const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object)