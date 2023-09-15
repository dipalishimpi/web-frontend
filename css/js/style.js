   /* var message="in global";
    console.log("Global message=" +message);
    var a = function(){
        var message="inside a";
        console.log("inside a message=" +message);
        b();
    }
    function b(){
        console.log("inside b=" + message);
    };
    a();*/

    /*var string="hello";
    string+=" world";
    console.log(string);
    console.log((5+6)/2);*/

    // var x=4;
    // y="4";
    // if (x===y){
    //     console.log("x and y are same in data type");
    // }
    // else{
    //     console.log("x and y are different");
    // }

    // var x=4;
    // y="4";
    // if (x==y){
    //     console.log("x and y are same in data type");
    // }
    // else{
    //     console.log("x and y are different");
    // }


    // function a()
    // {
    //     return
    //     {
    //         name: "dipali"
    //     };
    // }
    // function b()
    // {
    //     return{
    //         name: "dipali"
    //     }
    // }
    // console.log(a());
    // console.log(b());

    // var sum=0;
    // for( var i=0;i<10;i++){
    //     console.log(i);
    //     sum+=i;
    // }
    // console.log("sum of 0 through 9 is " +sum);


    // function surname(name){
    //     console.log("my name is dipali "+name);
    // }
    // surname('jagtap');

    
/*creating object using new object() syntax*/
    // var company = new Object();
    // company.name="facebook";
    // company.city="ahemdabad"
    // company.ceo=new Object();
    // company.ceo.firstname="mark";
    // company.ceo.favcolor="blue";
    // console.log(company);
    // console.log("ceo of first name is: "+company.ceo.firstname);
    // console.log(company["name"]);
    // company["stock of company"]=100
    // console.log(company["stock of company"]);
    // console.log(company["city"])

/*creating object using object literal syntex*/ 
    // var facebook={
    //     name: "facebook",
    //     ceo: {
    //         firstname: "mark",
    //         favcolor: "blue"
    //     },
    //     "stock of company": 110
    // };
    // console.log(facebook);
    // console.log(facebook.ceo.firstname)

    /*function explained */
    /*functions are object */
    // function multiply(x,y){
    //     return x*y;
    // }
    // console.log(multiply(5,3));
    // multiply.version="1.2.0";
    // console.log(multiply.version);

    /*function factory */

    // function makemultiplier(multiplier){
    //     var myfunc=function(x){
    //         return multiplier*x;
    //     }
    //     return myfunc;
    // }
    // var multiplyby3=makemultiplier(10);
    // console.log(multiplyby3(5));
    // var doubleall=makemultiplier(2);
    // console.log(doubleall(100));

    // function dooperation(x,operation){
    //     return operation(x);
    // }
    // var result=dooperation(5,multiplyby3);
    // console.log(result);
    // result=dooperation(100,doubleall);
    // console.log(result);

    /*passing variable by value and reference  */
    // var a=3;
    // var b=5;
    // b=a;
    // console.log(a,b);
    

    // var x={a: 20}
    // var y=50;
    // y=x;
    // console.log(y.a);

    // var a=5;
    // var b=a;
    // console.log("a is :"+ a +" b is : "+b)
    // b=7;
    // console.log("a is :"+ a +" b is : "+b)

    // var a = {x: 7};
    // var b = a;
    // console.log(a)
    // console.log(b)
    // b.x=10;
    // console.log(a)
    // console.log(b)

    // function changeobject(objvalue){
    //     console.log("in change object");
    //     console.log("before");
    //     console.log(objvalue);
    //     objvalue.x=40;
    //     console.log("after");
    //     console.log(objvalue);
    // }
    // value={x:7};
    // changeobject(value);
    // console.log("after change value original value");
    // console.log(value);

    /*function constructor */
    // function Circle(radius){
    //     this.radius=radius;
    //     this.getArea=function(){
    //         return Math.PI*Math.pow(this.radius,2);
    //     };
    // }
    // var mycircle=new Circle(10)
    // console.log(mycircle)

    /*object literals and 'this' */

    // var literalcircle ={
    //     radius: 10,
    //     getArea: function(){
    //         var self=this;
    //         console.log(this);
    //         var increaseradius = function(){
    //             self.radius=20;
    //         };
    //         increaseradius();
    //         return Math.PI*Math.pow(this.radius,2);
    //     }
    // };

    // console.log(literalcircle.getArea());

    // function Dog(name,name2) {
    //     this.name = name;
    //     this.name2 = name2;
    //   }
      
    //   Dog.prototype.bark = function () {
    //     console.log(this.name + " likes barking! Bark!");
    //     console.log(this.name2 + " likes barking! Bark!");
    //   }
      
    //   var max = new Dog("Max", "Buddy");
    //   max.bark();

    /*array example */

    // var array=new Array();
    // array[0]="dipali";
    // array[1]=3;
    // array[2]=function (name){
    //     console.log("hello "+name)
    // };
    // array[3]={course: "html,css and javascript"}
    // console.log(array);
    // array[2](array[0]);
    // console.log(array[3].course)

    /*short hand array creation */

    // var names=['dipali','sadhana','jignesh'];
    // for(var i=0;i<names.length;i++){
    //     console.log(names[i]);
    // }
    // console.log(names)
    // var arrayname=[
    //     {name: 'dipali',age:25},
    //     {name:'gaurav' ,age:25},
    //     "pink",
    //     40
    // ];
    // console.log(arrayname);

    //  var myobj={
    //     name:'dipali',
    //     course: "html-css-javascript",
    //     plateform: 'coursera'
    //  };
    //  for(var prop in myobj){
    //     console.log(prop+": "+ myobj[prop]);
    //  }

    // var counter = 0;
    // var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
    // for (var i = 0; i < myArray.length; i++) {
    // counter++;
    // }
    // console.log(counter);

    /*closure */
    // function makemultiplier(multiplier){
    //     return(
    //         function(x){
    //             return multiplier*x;
    //         }
    //     )
    // };
    // var doubleall=makemultiplier(2);
    // console.log(doubleall(10));

     /*immediately invoked function expression (iife) */
        // (function(window) {
        // var obj = {};
        // obj.name="dipali";
        // obj.dreamOn = function () {
        // console.log("I want to see the global scope! Let me out!" + obj.name);
        //  }
        //  window.obj=obj;
        //  })(window);
        
        // obj.dreamOn();














































