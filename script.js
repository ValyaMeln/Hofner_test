// function backToUp (){
//     let button = $('.footer__btn_go_up');
//     $(window).on ('scroll', ()=>{
//         if ($(this).scrollTop()>=50){
//             button.fadeIn();
//         } else {
//             button.fadeOut();
//         }
//     });
//     button.on('click', (e) =>{
//         e.preventDefault();
//         $('html').animate({scrollTop:0}, 1000);
//     })
// }

let ourAdvantagesOpen = document.querySelector('.btn_read_more__cloth');

let ourAdvantagesPopup = document.querySelector("#btn_read_more");

let ourAdvantagesClose = document.querySelector(".modal__ourAdvantages_close");



ourAdvantagesOpen.addEventListener("click", function (event) {
    event.preventDefault();
    ourAdvantagesPopup.classList.add("modal-content-show");
    console.log("Клік по силці2222222");
});

ourAdvantagesClose.addEventListener("click", function (event) {
    event.preventDefault();
    ourAdvantagesPopup.classList.remove('modal-content-show');
    // ourAdvantagesPopup.classList.remove('modal-error');
    console.log("Клік по силці33333");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (ourAdvantagesPopup.classList.contains("modal-content-show")) {
            ourAdvantagesPopup.classList.remove("modal-content-show");
        }
    }
})



