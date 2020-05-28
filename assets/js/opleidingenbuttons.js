// console.log(document.getElementById("FSD_Factsheet"));

var buttons = document.getElementsByClassName("opleidingbutton");
var closebuttons = document.getElementsByClassName("close_button_content")
// console.log(buttons);

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",ShowHideContent);
    closebuttons[i].addEventListener("click",ShowHideContent);
}
// 

function ShowHideContent(){
var buttoncontent = document.getElementsByClassName(this.id);
if(this.classList.contains('close_button_content')){
    // console.log("this is a close button");
    var buttcont = this.parentNode;
    buttcont.classList.toggle("button_content_show")
    // console.log(buttcont);
    }

    else{
        buttoncontent[0].classList.toggle("button_content_show")
    }
}