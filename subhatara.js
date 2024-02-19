var i = 0; 			
var images = [];
var time = 7000;	
	 

images[0] = "slideshow1.jpg";
images[1] = "slideshow2.jpg";
images[2] = "slideshow3.jpg";
images[3] = "img1.jpg";

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload=changeImg;

//const parentContainer =  document.querySelector('.read-more-container');

//parentContainer.addEventListener('click', event=>{

  //  const current = event.target;

    //const isReadMoreBtn = current.className.includes('read-more-btn');

    //if(!isReadMoreBtn) return;

   // const currentText = event.target.parentNode.querySelector('.read-more-text');

    //currentText.classList.toggle('read-more-text--show');

    //current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

//})