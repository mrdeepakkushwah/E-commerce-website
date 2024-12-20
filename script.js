let container = document.querySelector("#Product-container");
let proimage = document.getElementById("pimage");
let proHeading = document.getElementById('heading');
let proMrp = document.querySelector("#mrp");
let proPrice = document.querySelector("#price");
let disPrice = document.querySelector("#discount");
let proBtn = document.querySelector("#price-btn");
let uploadli = document.querySelector("#upload");
const element = document.querySelector(".add-container");
let addCantianer = document.querySelector(".card-container");

container.addEventListener("submit", (e) => {
        e.preventDefault();
        let heading = proHeading.value.trim();
        let image = proimage.src;
        let mrp = proMrp.value.trim();
        let price = proPrice.value.trim();
        let discount = disPrice.value.trim();
        alert(" Your Product Successfully ..😊😊");
        clearInput();
        alert(`${heading} ${image} ${mrp} ${price} ${discount}`);
        // console.log(image);

        // let card = document.createElement('div');
        // card.className = 'card';
        // card.innerHTML = `
        // <div class="img-container"><img src=${image} alt="" class="img"/></div>
        // <div class="description">
        // <div class="hover-navbar">
        // <div class="hover-nav"><button id="hover-btn" title="ADD TO cart"><a href="#">ADD TO
        // CART</a></button>
        // <p id="para-icon"><img src="./icone/icons8-eye-24.png" title="Quick Shop" id="bg-icon">
        // <img src="./icone/icons8-like-50.png" title="Favrate" id="bg-icon">
        // </p>
        // </div>
        // </div>
        // <span id="text"><a href="#text">${heading}</a></span>
        // <div class="price-desc">
        // <span>₹${price}</span><span><del>₹${mrp}</del></span><span>${discount}%off</span>
        // <button type="button" class="btn btn-outline-warning" id="buy-btn">BUY NOW</button>
        // </div>
        // </div>
        // `;
        //    addCantianer.appendChild(card);
                
});

let clearInput = () => {
        proimage.value = "";
        proHeading.value = "";
        proMrp.value = "";
        proPrice.value = "";
        disPrice.value = "";

}
uploadli.addEventListener('click', () => {
        element.classList.toggle("disblock");
});
let card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<div class="img-container"><img src=${image} alt="" class="img"/></div>
<div class="description">
<div class="hover-navbar">
<div class="hover-nav"><button id="hover-btn" title="ADD TO cart"><a href="#">ADD TO
CART</a></button>
<p id="para-icon"><img src="./icone/icons8-eye-24.png" title="Quick Shop" id="bg-icon">
<img src="./icone/icons8-like-50.png" title="Favrate" id="bg-icon">
</p>
</div>
</div>
<span id="text"><a href="#text">${heading}</a></span>
<div class="price-desc">
<span>₹${price}</span><span><del>₹${mrp}</del></span><span>${discount}%off</span>
<button type="button" class="btn btn-outline-warning" id="buy-btn">BUY NOW</button>
</div>
</div>
`;
   addCantianer.appendChild(card);
   