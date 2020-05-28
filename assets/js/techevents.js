  // FIX INFO & CLOSE BUTTON
  for (i = 0; i < document.getElementsByClassName("tev_info").length; i++) {
    document.getElementsByClassName("tev_info")[i].addEventListener("click", growItem);
}
for (i = 0; i < document.getElementsByClassName("tev_sluiten").length; i++) {
    document.getElementsByClassName("tev_sluiten")[i].addEventListener("click", shrinkItem);
}

// FIX STICKY AND DATESORT BUTTON IN CASE OF MORE THAN 4 ITEMS
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementsByClassName("tevitems").length > 4) {
        document.getElementsByClassName("stickyline")[0].style.display = "flex";
        document.getElementsByClassName("stickybutton")[1].addEventListener("click", CollapseTevents);
    }
});


// COLLAPSE FUNCTION FOR EVENTS OVERVIEW
function CollapseTevents() {
    var maxheight = Math.ceil(Math.ceil((((document.getElementsByClassName("tevitems").length / 4) - 1))) * 34.4 + 38);
    if (window.innerWidth < 768) {
        maxheight = Math.ceil(Math.ceil((((document.getElementsByClassName("tevitems").length / 2) - 1))) * 68.8 + 76);
    }
    document.getElementsByClassName("tevbody_inner")[0].classList.add("tempoverflow");
    if ((document.getElementsByClassName("tevbody_inner")[0].style.maxHeight == maxheight + "vw")) {
        // console.log ("already collapsed")
        document.getElementsByClassName("tevbody_inner")[0].style.removeProperty("max-height");
        // console.log( document.getElementsByClassName("stickybutton")[1].childNodes[0].innerHTML)
        document.getElementsByClassName("stickybutton")[1].innerHTML = "Show More";
        document.getElementsByClassName("stickyline")[0].classList.remove("fixstickyline");
    }
    else {
        // document.getElementsByClassName("stickyline")[0].style.top = "5vw";
        document.getElementsByClassName("tevbody_inner")[0].style = "max-height:" + maxheight + "vw";
        document.getElementsByClassName("stickybutton")[1].innerHTML = '<a href="#Tevents">Show Less</a>';
        
    }

    document.getElementsByClassName("tevbody_inner")[0].classList.toggle("tevbody_show");
    document.getElementsByClassName("tevbody_inner")[0].ontransitionend = function () {
        document.getElementsByClassName("tevbody_inner")[0].classList.remove("tempoverflow");
        if (document.getElementsByClassName("stickybutton")[1].childNodes[0].innerHTML == "Show Less"){
            document.getElementsByClassName("stickyline")[0].classList.add("fixstickyline");
        }
    
        // else {
        //     document.getElementsByClassName("stickyline")[0].classList.add("fixstickyline");
        // }
    
    }
}

// console.log(document.getElementsByClassName("stickybutton")[1].childNodes[0].innerHTML == "Show More")

// EXPAND EVENT ITEM FULLSCREEN AND SHOW THE REST OF CONTENT IN THE CONTAINER
function growItem() {
    this.parentNode.parentNode.parentNode.classList.toggle("tevitems_extended");
    this.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].classList.toggle("temphide");
    this.parentNode.childNodes[3].classList.toggle("temphide");
    this.parentNode.childNodes[1].classList.toggle("temphide");
}

// REVERT TO SMALLER SIZED EVENT ITEM
function shrinkItem() {
    this.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].classList.toggle("temphide");
    this.parentNode.parentNode.parentNode.classList.toggle("tevitems_extended");
    this.parentNode.childNodes[3].classList.toggle("temphide");
    this.parentNode.childNodes[1].classList.toggle("temphide");

}

// DATE SORTING
function sortIncrease() {
    var tevarray = [];

    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        tevarray.push(document.getElementsByClassName("tevitems")[i].childNodes[1].childNodes[3].innerText)
    }
    tevarray.sort(function (a, b) {
        a = a.split('-').reverse().join('');
        b = b.split('-').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
        // return a.localeCompare(b);         // <-- alternative ????

    });
    //  tevarray.reverse();
    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        for (j = 0; j < document.getElementsByClassName("tevitems").length; j++) {

            if (tevarray[i] == document.getElementsByClassName("tevitems")[j].childNodes[1].childNodes[3].innerText) {
                document.getElementsByClassName("tevitems")[j].style.order = i + 1;
            }
        }
    }
}

function sortDecrease() { //decrease
    var tevarray = [];

    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        tevarray.push(document.getElementsByClassName("tevitems")[i].childNodes[1].childNodes[3].innerText)
    }
    tevarray.sort(function (a, b) {
        a = a.split('-').reverse().join('');
        b = b.split('-').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    });
    tevarray.reverse();

    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        for (j = 0; j < document.getElementsByClassName("tevitems").length; j++) {

            if (tevarray[i] == document.getElementsByClassName("tevitems")[j].childNodes[1].childNodes[3].innerText) {
                document.getElementsByClassName("tevitems")[j].style.order = i + 1;
            }
        }
    }
}

// Function that determines when the increase / decrease sort is to be used
function dateSort() {
    var tevarray = [];

    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        tevarray.push(document.getElementsByClassName("tevitems")[i].childNodes[1].childNodes[3].innerText)
    }
    tevarray.sort(function (a, b) {
        a = a.split('-').reverse().join('');
        b = b.split('-').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    });

    for (i = 0; i < document.getElementsByClassName("tevitems").length; i++) {
        for (j = 0; j < document.getElementsByClassName("tevitems").length; j++) {

            if (tevarray[i] == document.getElementsByClassName("tevitems")[j].childNodes[1].childNodes[3].innerText) {
               
               
                if (document.getElementsByClassName("tevitems")[j].style.order == i + 1) {
                    document.getElementsByClassName("spinnerforward")[0].classList.remove("temphide");

                    setTimeout(function () {
                        // console.log("decrease");
                        sortDecrease();
                        document.getElementsByClassName("spinnerforward")[0].classList.add("temphide");
                    }, 500);

                    return
                }

                else {
                    document.getElementsByClassName("spinnerreverse")[0].classList.remove("temphide");

                    setTimeout(function () {
                        // console.log("increase");
                        sortIncrease();
                        document.getElementsByClassName("spinnerreverse")[0].classList.add("temphide");
                    }, 500);
                    // document.getElementsByClassName("spinnerreverse")[0].classList.toggle("temphide");
                    return
                }

            }
        }
    }
}




// SORT ALL EVENT ITEMS incrementally first
document.addEventListener("DOMContentLoaded", sortIncrease);

// Give datesort button eventlistener to switch between increase / decrease mode
document.getElementsByClassName("datesort")[0].addEventListener("click", dateSort)