
window.onload = function() {
let imgAll = document.querySelectorAll('img');
let ImgEvent = null;
let imgZIndex = 1;

for (let i = imgAll.length-1; i >= 0; i--) {
	let imgTop = imgAll[i].offsetTop;
	let imgLeft  = imgAll[i].offsetLeft; 
	imgAll[i].style.position = 'absolute';
	imgAll[i].style.zIndex = 'imgZIndex';
	imgAll[i].style.top = imgTop + 'px';
	imgAll[i].style.left = imgLeft + 'px';
	imgAll[i].ondragstart = () => { return false }

	imgAll[i].addEventListener('mousedown', imgEventFunc);
	
	function imgEventFunc(EO) {
		EO=EO||window.event;
		imgZIndex++;
		let mouseTop;
		let mouseLeft;
		let imgDifPosTop;
		let imgDifPosLeft;
		ImgEvent = EO.target;
		mouseTop = EO.pageY;
		mouseLeft = EO.pageX;
		imgDifPosTop = mouseTop - imgTop + 'px';
		imgDifPosLeft = mouseLeft - imgLeft + 'px';
		ImgEvent.style.zIndex = imgZIndex;
		window.addEventListener('mousemove', imgMoveFunc);
		window.addEventListener('mouseup', imgUpFunc);
		function imgMoveFunc(EO) {
			EO=EO||window.event;
			mouseTop = EO.pageY;
			mouseLeft = EO.pageX;
			imgDifPosTop = parseInt(imgDifPosTop);
			imgDifPosLeft = parseInt(imgDifPosLeft);
			ImgEvent.style.top = mouseTop - imgDifPosTop + 'px';
			ImgEvent.style.left = mouseLeft - imgDifPosLeft + 'px' ;
			imgTop = parseInt(ImgEvent.style.top);
			imgLeft = parseInt(ImgEvent.style.left); 
		}
		function imgUpFunc() {
			window.removeEventListener('mousemove', imgMoveFunc);
			window.removeEventListener('mouseup', imgUpFunc);
			window.removeEventListener('mouseout', imgUpFunc);
			}
			window.addEventListener('mouseout', imgUpFunc);
		}
	}
}
