const sliderContainer = document.querySelector('.slider-container'); 
const slider_img = document.querySelector('.slider-img');
const images = [
    'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506126944674-00c6c192e0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
    'https://images.unsplash.com/photo-1505763169286-d69f372b4652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1563&q=80',
    'https://images.unsplash.com/photo-1581362662614-dd27d9eb9291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
];
let windowInfo = {
    windowWidth: window.innerWidth};

// random image from array to start
let i = Math.floor(Math.random() * images.length);

// add div, class image-slider
let imageSlider = document.createElement('div');
sliderContainer.appendChild(imageSlider);
imageSlider.classList.add('image-slider');

// add div, class slide
let slide = document.createElement('div');
imageSlider.appendChild(slide);
slide.classList.add('slide');

// add img, class slider-img
let sliderImg = document.createElement('img');
slide.appendChild(sliderImg);
sliderImg.classList.add('slider-img');
sliderImg.setAttribute('src', images[i]);

// add previous button
let prevbtn = document.createElement('button');
sliderContainer.appendChild(prevbtn);
prevbtn.classList.add('image-slider__nav-btn', 'image-slider__prev');
let prevBtn = document.querySelector('.image-slider__prev');

// add next button
let nextbtn = document.createElement('button');
sliderContainer.appendChild(nextbtn);
nextbtn.classList.add('image-slider__nav-btn', 'image-slider__next');
let nextBtn = document.querySelector('.image-slider__next');

// when images loaded, remove class hide on container

/*
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = resolve; }))).then(() => {
    sliderContainer.classList.remove('hide');
});
*/

function checkImgUrl(url) {
    return new Promise(function(resolve, reject){
        let imgUrl = new Image();
        imgUrl.onload = function() {
            resolve(url);
        }
        imgUrl.onerror = function() {
            reject(url);
        }
        imgUrl.src = url;
    })
}

let promises = images.map(checkImgUrl);

Promise.all(promises)
    .then(imgUrls =>
        { for (let i = 0; i < imgUrls.length; i++) {
            sliderContainer.classList.remove('hide');
            }
        })
    .catch(imgUrls =>
        {
        alert("Error");
        });

// change img src
function setImg(){
    return sliderImg.setAttribute('src', images[i]);
}

// set previous slide
function prev() {
    if (i === 0) { 
    i = images.length + 1;	
	i--;
    }
    if (i !== 0) { 	
    i--;
    }
    sliderContainer.style.left =
    -1 * windowInfo.windowWidth + 'px';
    return setImg();
}

// set next slide
function next() {
    if (i < images.length ) {
    i++;
    }
    if (i > images.length - 1) {
    i = 0;
    }
    sliderContainer.style.left =
    -1 * windowInfo.windowWidth + 'px';
    return setImg();		 
}

// after resize, get current window width
function windowResize() {
    const newWidth = getWindowWidth();
        sliderContainer.style.left =
        -1 * newWidth + 'px';
}

// get current window width
function getWindowWidth() {
    let w = window;
    return w.innerWidth;
}

// Event listeners
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
window.addEventListener('resize', windowResize);