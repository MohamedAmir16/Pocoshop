var out = document.getElementById('shipp') ;
function Prix(){
  let selectElement = document.getElementById("out");
let selectedOption = selectElement.options[selectElement.selectedIndex];
let selectedText = selectedOption.text;
switch(selectedText){
case 'Alger' : 
out.innerHTML ='400da';
break;
case 'Blida' : 
out.innerHTML ='500da';
break;
case 'Boumerdes' : 
out.innerHTML ='600da';
break;


  }
  
}
