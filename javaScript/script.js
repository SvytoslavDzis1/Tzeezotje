const swiper = new Swiper('.review__swiper-block', {  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
  });
  
  
const swiperImg = new Swiper('.swiper-img', {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // when window width is >= 640px
    700: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});


// Находим форму в DOM
let menuElement = document.querySelector('.popup-menu');// Воспользуйтесь методом querySelector()
let menuOpenButton = document.querySelector('.header__menu-button');
let popupCloseMenu = menuElement.querySelector('.popup-menu__close');

let formElement = document.querySelector('.popap-form');// Воспользуйтесь методом querySelector()
let formOpenButton = document.querySelector('.button_type_activ');
let popupCloseform = formElement.querySelector('.popup-menu__close');

function menuPopupOpen() {
  menuElement.classList.add('popup-menu_activ');
}
function formPopupOpen() {
  formElement.classList.add('popup-form_activ');
}

function menuPopupClose() {
  menuElement.classList.remove('popup-menu_activ');
}
function formPopupClose() {
  formElement.classList.remove('popup-form_activ');
}

menuOpenButton.addEventListener('click', menuPopupOpen)
formOpenButton.addEventListener('click', formPopupOpen)

popupCloseMenu.addEventListener('click',  menuPopupClose)
popupCloseform.addEventListener('click',  formPopupClose)

$(document).ready(function() {

  //E-mail Ajax Send
  $("popap__form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/php/send.php",
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
    });
    return false;
  });

});