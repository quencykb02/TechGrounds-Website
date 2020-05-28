// console.log(document.getElementById("FSD_Factsheet"));

var collapse_twin_buttons = document.getElementsByClassName("showtwin");

// var closebuttons = document.getElementsByClassName("close_button_content")
// console.log(collapse_twin_buttons);

for(i=0;i<collapse_twin_buttons.length;i++){
    collapse_twin_buttons[i].addEventListener("click",CollapseTwinContent);
    // closebuttons[i].addEventListener("click",ShowHideContent);
}
// 

function CollapseTwinContent(){
    var collapse_this_button = document.getElementById(this.id);
var buttoncontent = document.getElementsByClassName(this.id);
for (i=0;i<buttoncontent.length;i++){
    // buttoncontent[i].style = "overflow: hidden";
    buttoncontent[i].classList.add("tempoverflow");
    buttoncontent[i].classList.toggle("showhidetwin");
    buttoncontent[i].ontransitionend = function(){
        this.classList.remove("tempoverflow");
    }
    
    // buttoncontent[i].style = "overflow: hidden";

}
  collapse_this_button.classList.toggle("rotatebutton");
}
//         buttoncontent[0].classList.toggle("button_content_show")
//     }
// }