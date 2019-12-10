var name="Sigrid";
var message = " Hello " + name +" !";
var timeout=3000;
var isNight=true;
var isMorning=true;
var nothing=null;

var date=new Date();
var hour= date.getHours();

if(hour == 0) {
    alert ("happy new year");}
    
        else if(hour>=20 || hour<=6){ 
            alert("Noapte Buna");
            alert("Somn usoor");

        }
     else if(hour<=11) {

   alert("Buna dimineata");
}
else if(hour <=12) {
    alert("Buna ziua");

}else {
    alert("Buna seara!");
}



setTimeout(sayHello,timeout);
function sayHello () { 
//alert(message);
console.log(message);

}