//this is for small screen
const listmenu = document.querySelector('.listmenu');
const menu = document.querySelector('.menu');
listmenu.style.maxHeight="0px";
   function togglemenu(){
    if(listmenu.style.maxHeight=="0px"){
        listmenu.style.maxHeight="400px";
    } 
    else{
        listmenu.style.maxHeight="0px";
    }
   }
