//  function of  showing the small imgs into the big card  on hovering or clicking.
	let image = document.querySelector('#img');
		function showImg(imgSrc){
	image.src = imgSrc;
	};


//  Dark & light mode switcher.
let body = document.body;
const btnFrame = document.querySelector('.btn-frame');
const btn = document.querySelector('.btn');
 
btnFrame.addEventListener('click', () => {
	btn.classList.toggle('toggler');
	body.classList.toggle('toggler');
}
);



