new SliderBar({
    el: '#slider',
    beforeImg: './assets/img/chart1.svg',
    afterImg: './assets/img/chart2.svg',
    width: "100%",
    height: "auto",
});

function setMaxSliderHeight() {
    const sliderImage = document.querySelector("#slider .before-img + img")
    const slider = document.querySelector("#slider");

    slider.style.maxHeight = `${sliderImage.offsetHeight}px`
}

setTimeout(() => {
    setMaxSliderHeight();
}, 50)

