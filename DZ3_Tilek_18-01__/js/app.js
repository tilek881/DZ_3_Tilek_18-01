const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () =>{
    tabContent.forEach((item) =>{
        item.style.display = "none";
    });
    tabs.forEach((item) =>{
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

let sliderIndex = 0
setInterval (() => {
    if (sliderIndex >= 3){
        sliderIndex = 0
    }else {
        sliderIndex ++
    }
    hideTabContent();
    showTabContent(sliderIndex);
},3000)

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if(target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if(target === item) {
                console.log(i);
                hideTabContent();
                sliderIndex = i;
                showTabContent(sliderIndex);
            }
        });
    }
});


const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) =>{
    if(event.target == modal) {
        closeModal();
    }
});

closeModalBtn.addEventListener("click", closeModal);

 console.log(document.body.clientHeight, document.body.scrollTop);

const html = document.querySelector("html");

function openModalScroll(){

    if(Math.floor(html.scrollHeight - html.scrollTop - html.clientHeight) === 0) {
        openModal();
    window.removeEventListener('scroll', openModalScroll)
    }
}

window.addEventListener("scroll", openModalScroll)