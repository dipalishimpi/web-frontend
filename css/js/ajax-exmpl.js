
(function(global){
    var ajaxutils={};
    function getRequestObject(){
        if  (window.XMLHttpRequest){
            return (new XMLHttpRequest);
        }
        else if (window.ActiveXObject){
            return(new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("ajax is not supported")
            return (null);
        }
    }

    //makes an ajax GET request to 'requesturl'
    ajaxutils.SendGetRequest=function(requesturl,responsehandler,isjsonresponse){
        var request=getRequestObject();
        request.onreadystatechange=function(){ handleresponse(request,responsehandler,isjsonresponse);
        }
        request.open("GET",requesturl,true);
        request.send(null);
    };

    function handleresponse(request,responsehandler,isjsonresponse){
        if ((request.readyState==4) && (request.status==200)){
            if (isjsonresponse == undefined){
                isjsonresponse=true;
            }
            if (isjsonresponse){
                responsehandler(JSON.parse(request.responseText))
            }
            else{
                responsehandler(request.responseText)
            }
        }
        
    }
    global.$ajaxutils=ajaxutils;

})(window);