const hero = document.querySelector("#hero");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");



img1.addEventListener("click", ()=>{
   hero.style.background = "url('img/shoe 1.jpg')"
   hero.style.Backgroundposition = "center";
   hero.style.backgroundRepeat = "no-repeat";
   hero.style.backgroundSize = "400px";
   hero.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.644)"
});

img2.addEventListener("click", ()=>{
    hero.style.background = "url('img/shoe 2.jpg')"
    hero.style.Backgroundposition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "400px";
    hero.style.boxShadow = "0px 8px 16px 0px rgba(14, 221, 228, 0.678)";
 });

 img3.addEventListener("click", ()=>{
    hero.style.background = "url('img/shoe 3.jpg')";
    hero.style.Backgroundposition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "400px";
    hero.style.boxShadow = "0px 8px 16px 0px rgba(2, 69, 95, 0.671)";

 });

 img4.addEventListener("click", ()=>{
    hero.style.background = "url('img/shoe 4.jpg')";
    hero.style.Backgroundposition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "400px";
    hero.style.boxShadow = "0px 8px 16px 0px rgba(214, 15, 204, 0.753)";
 });


 img5.addEventListener("click", ()=>{
   hero.style.background = "url('img/shoe 5.jpg')";
   hero.style.Backgroundposition = "center";
   hero.style.backgroundRepeat = "no-repeat";
   hero.style.backgroundSize = "400px";
   hero.style.boxShadow = "0px 8px 16px 0px rgba(214, 15, 204, 0.753)";
});
