//counter code
var button=document.getElementID('counter');
var counter=0;
button.onClick=function(){
  counter =counter+1;
  var span = document.getElementID('count');
  span.innerHTMl = counter.toString();
  
    
    
    
};