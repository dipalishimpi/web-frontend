// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// function sayhello(){
//     var name=document.getElementById("name").value
//     var message="<h2>Hello "+name+"!</h2>"
//     // document.getElementById("content").textContent=message
//     document.getElementById("content").innerHTML=message

//     if (name==="student"){
//         var title=document.querySelector("#title").textContent;
//         title+="  loving it!";
//         document.querySelector("#title").textContent=title;
//     }
// }


// document.addEventListener("DOMContentLoaded",
// function(event){
//     function sayhello(){
//         var name=document.getElementById("name").value
//         var message="<h2>Hello "+name+"!</h2>"
//         // document.getElementById("content").textContent=message
//         document.getElementById("content").innerHTML=message

//         if (name==="student"){
//             var title=document.querySelector("#title").textContent;
//             title+="  loving it!";
//             document.querySelector("#title").textContent=title;
//         }
//     }  
//     document.querySelector("button").addEventListener("click",sayhello);  
// }
// );

document.addEventListener("DOMContentLoaded",function(event){
    document.querySelector("button").addEventListener("click",function(){
        var self=this;
        //call the server to get that name
        $ajaxutils.SendGetRequest("/css/js/name.json", function(res){
            // var name=request.responseText;
            var message= res.firstname +" "+res.lastname;
            if(res.likeschinsefoods){
                message+=" likes chinese food";
            }
            else{
                message+=" doesn't like chinese food";
            }
            message+="  and user ";
            message+=res.numberofdisplay;
            message+="diplay of coding";
            document.querySelector("#content").innerHTML="<h2>Hello  "+ message +"!</h2>";
        });
        
    
    });
});

