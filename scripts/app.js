
const toggleIcon = document.querySelector('.menu-toogle-icon');
const sideBarMenu = document.querySelector('.side-bar-box');
const closeIcon = document.querySelector('.close-icon');
const show = 'is-show';
toggleIcon.addEventListener('click',()=>{
    sideBarMenu.classList.add(show);
})

closeIcon.addEventListener('click',()=>{
    sideBarMenu.classList.remove(show);
})

window.addEventListener('click',(e)=>{
    if(!sideBarMenu.contains(e.target) && !e.target.matches(".menu-toogle-icon")){
        sideBarMenu.classList.remove(show);
    }
})
$('.hero-slider-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
});

// popular-prop-content

$('.popular-prop-content').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            //   infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            //   infinite: true,
              arrows: false,
            },
          },
    ],
});

$('.feedback-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive:[
      {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            // arrows: false,
          },
      },
      {
        breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
      },

      {
        breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
      },
    ]
})


const displayValues = document.querySelectorAll('.counter');
const interval = 2000;
displayValues.forEach((displayValue)=>{
  let startValue = 1500;
  const endValue = parseInt(displayValue.getAttribute('data-val'))
  const duration = Math.floor(interval / endValue);
  let counter = setInterval(()=>{
    startValue +=1;
    displayValue.textContent = startValue;
    if(startValue===endValue){
      clearInterval(counter);
    }
  },duration);
})