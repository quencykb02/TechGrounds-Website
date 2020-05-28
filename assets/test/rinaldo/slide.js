    // window.addEventListener('resize', getWidth);
    // window.addEventListener('resize', ifWidth);
    // window.onload = getWidth;
    // window.onload = ifWidth;

//     var size = 0;
// function getWidth() {
        
//         if (this.innerWidth) {
//             size = this.innerWidth;
//         }
    
//        else if (document.documentElement && document.documentElement.clientWidth) {
//             size = document.documentElement.clientWidth;
//         }
    
//         else if (document.body) {
//             size = document.body.clientWidth;
//         }

//         // document.getElementById("skills_body").classList.remove("marquee");
//         document.getElementById("range_slides_4_columns_carousel").style = "height: "+size+"px;"

//     }

// function ifWidth(){
//     if (size >= 768){
//         document.getElementById("skills_body").classList.remove("marquee");
//        }

// }



$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 30000,
    //gap in pixels between the tickers
    gap: 0,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
    
    startVisible: true
});


document.getElementById("skills_body").classList.add("temphide_altbody");