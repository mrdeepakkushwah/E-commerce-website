let scrollContainer = document.querySelector(".photo-scroll");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 100;
});
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";

    scrollContainer.scrollLeft -= 900;
});

function autoScroll() {
    scrollContainer.scrollLeft += 1;
    if (scrollContainer.scrollLeft === (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
        scrollContainer.scrollLeft = 0;
    }
}

// Call the autoScroll function every 10 milliseconds
setInterval(autoScroll, 5);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})