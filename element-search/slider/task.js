const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderItems = document.getElementsByClassName('slider__item');
const sliderItemsArr = Array.from(sliderItems);
console.log(sliderItemsArr);

let foundIndex = sliderItemsArr.findIndex(el => el.className === 'slider__item slider__item_active');
console.log(foundIndex);
let i = foundIndex;

sliderArrowPrev.onclick = function() {

    console.log(`активный слайд ${i}`);
    sliderItemsArr[i].classList.remove('slider__item_active'); 
    i--;

    if (i === -1) {
        i = sliderItemsArr.length - 1;
    }

    console.log(`След слайд ${i}`);
    sliderItemsArr[i].classList.add('slider__item_active'); 

}

sliderArrowNext.onclick = function() {

    console.log(`Активный слайд ${i}`);
    sliderItemsArr[i].classList.remove('slider__item_active'); 
    i++; //п.4

    if (i === sliderItemsArr.length) {
        i = foundIndex;
    }

    console.log(`След слайд ${i}`);
    sliderItemsArr[i].classList.add('slider__item_active');
  }