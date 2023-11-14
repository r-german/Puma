const wrapper=document.querySelector(".wrapper"),menuIcon=document.querySelector(".menu__icon"),menuNav=document.querySelector("nav");menuIcon.addEventListener("click",(function(){wrapper.classList.toggle("_lock"),menuIcon.classList.toggle("_active"),menuNav.classList.toggle("_active")}));const menuLinks=document.querySelectorAll("[data-goto]");function clickOnLink(e){const t=e.target,s=document.querySelector(t.dataset.goto).getBoundingClientRect().top+scrollY;menuIcon.classList.contains("_active")&&(wrapper.classList.remove("_lock"),menuIcon.classList.remove("_active"),menuNav.classList.remove("_active")),window.scrollTo({top:s}),e.preventDefault()}menuLinks.forEach((e=>{e.addEventListener("click",clickOnLink)}));var options={threshold:.99},callback=function(e){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("_transform"),observer.unobserve(e.target))}))},observer=new IntersectionObserver(callback,options),animItems=document.querySelectorAll(".anim-item");animItems.forEach((e=>{observer.observe(e)}));var options2={threshold:.02},callback2=function(e){e.forEach((e=>{e.isIntersecting?e.target.classList.add("_display"):e.target.classList.remove("_display")})),animItems2Set.has(document.querySelector("._display"))?scrollToTop.style.display="flex":scrollToTop.style.display="none"},observer2=new IntersectionObserver(callback2,options2),animItems2=document.querySelectorAll(".anim-item2");animItems2.forEach((e=>{observer2.observe(e)}));var animItems2Set=new Set(animItems2),scrollToTop=document.querySelector(".scroll-to-top");const box1Swiper=new Swiper(".box-1-swiper",{navigation:{nextEl:".swiper-button-next"},freeMode:{enabled:!0,sticky:!0},spaceBetween:30,keyboard:!0,speed:600,autoplay:!0,loop:!0}),box3TabsSwiper=new Swiper(".tabs-swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},freeMode:{enabled:!0,sticky:!0},spaceBetween:30,keyboard:!0,speed:600,slidesPerView:1,breakpoints:{381:{slidesPerView:2,spaceBetween:21},480:{slidesPerView:2,spaceBetween:31},601:{slidesPerView:3,spaceBetween:21},768:{slidesPerView:3,spaceBetween:31},993:{slidesPerView:4,spaceBetween:31}}}),box4Swiper=new Swiper(".box-4-swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,spaceBetween:30,keyboard:!0,parallax:!0,speed:600});window.addEventListener("load",(function(){document.querySelectorAll(".swiper-slide__photo").forEach((e=>{e.style.display="none",e.offsetHeight,e.style.display=""}))}));const spButtons=document.querySelectorAll(".sp-button");spButtons.forEach((e=>{e.addEventListener("click",(function(){this.classList.toggle("_open");let e=this.nextElementSibling;this.classList.contains("_open")?e.style.maxHeight=e.scrollHeight+"px":e.style.maxHeight=""}))})),document.body.addEventListener("mousedown",(function(){document.body.classList.add("_using-mouse")})),document.body.addEventListener("keydown",(function(e){"Tab"===e.key&&document.body.classList.remove("_using-mouse")}));