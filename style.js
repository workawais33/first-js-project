/*
plugin Name: TechGun LightBox
plugin version: 1.0.0
Plugin Author: Vishawajeet
About Plugin: ...
*/


// function to include html popup code

function includePopupHTML(){
    let html = '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="lightbox/imagespart/closeimg.png" alt=""></span><img id="left-arrow" src="lightbox/imagespart/leftimg.png" alt=""><img id="right-arrow" src="lightbox/imagespart/right img.png" alt=""><img  id="mainpopimage" src="images/istockphoto-1767768518-2048x2048.jpg" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)
}

let img;
let current;

// function to init plugin 
function imagePopupInit(target){


//   select all  images with class target
  img = document.getElementsByClassName(target);

 // add event listener on all selected images
 for(var i = 0; i < img.length; i++){
 // add pointer
 img[i].style.cursor = 'pointer';

//  add eveent listener 
   img[i].addEventListener("click", function(){
      document.getElementById("mainpopimage").src = this.src;
      document.getElementById("vis-popup").style.display = 'block';
      checkArrow();
   })
 
 }

includePopupHTML();
// next button 
document.getElementById('right-arrow').addEventListener('click', function(){
   nextimg();
});
// prev button
document.getElementById('left-arrow').addEventListener('click', function(){
   previmg();
});
}

//close button

function closePopUp(){
   document.getElementById("mainpopimage").src = "";
   document.getElementById("vis-popup").style.display = 'none';
}

//next image
function nextimg(){
   getCurrentImage();
   current++;
   document.getElementById("mainpopimage").src = img[current].src;
   checkArrow()
}

//prev image
function previmg(){
   getCurrentImage();
   current--;
   document.getElementById("mainpopimage").src = img[current].src;
   checkArrow()
}

function getCurrentImage(){
   for(var i = 0; i < img.length; i++){
if(img[i].src == document.getElementById("mainpopimage").src){
   current = i;
}
   }
}


function checkArrow(){
   getCurrentImage();
   if(current == "0"){
      document.getElementById('left-arrow').style.display = 'none';
      document.getElementById('right-arrow').style.display = 'block';

   }else if(current == img.length - 1){
      document.getElementById('right-arrow').style.display = 'none';
      document.getElementById('left-arrow').style.display = 'block';


   }else{
      document.getElementById('left-arrow').style.display = 'block';
      document.getElementById('right-arrow').style.display = 'block';
   }
}