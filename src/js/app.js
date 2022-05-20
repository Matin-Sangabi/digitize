import { productsData } from "./products.js";
const productsMobileData = document.querySelector(".productsMobileData");
const sortSections = document.querySelectorAll(".sort-section button");
const accBtns = document.querySelectorAll(".accBtn");
const priceSort = document.querySelector(".price-sort");
const bottomNavs = document.querySelectorAll(".bottom-nav");

bottomNavs.forEach((bottomNav)=>{
    bottomNav.addEventListener("click" , function(){
        bottomNavs.forEach((item)=>{
            item.classList.remove("text-slate-800");
            item.children[0].children[1].classList.add("hidden");
        });
        this.classList.add("text-slate-800");
        this.children[0].children[1].classList.remove("hidden");
    });
});



priceSort.children[1].children[0].addEventListener("change" , function(){
    if(this.value == this.min){
        priceSort.children[0].innerHTML = `قیمت :از  1 میلیون تا ... `;
    }
    else{
        priceSort.children[0].innerHTML = `قیمت : از ${this.min} میلیون  تا ${this.value} میلیون`;
    }
});

accBtns.forEach((accBtn)=>{
    accBtn.addEventListener("click" , function(){
        this.nextElementSibling.classList.toggle("hidden");
        this.children[0].children[1].classList.toggle("rotate-180");
    });
});


class products {
    getProducts() {
        return productsData;
    }
}
class UI {
    displayProducts(product) {
        let resault = "";
        product.forEach(element => {
            resault += `
            <div class="bg-white p-2 rounded-xl">
                <!-- cart image -->
                <div class="p-2 bg-slate-200 rounded-lg">
                    <img src="${element.imageUrl}" alt="">
                </div>
                <!-- cart Content -->
                <div class="p-2">
                    <!-- content brnad -->
                    <div class="flex justify-between">
                        <span class="text-slate-400">اپل</span>
                        <div class="circle flex justify-center items-center">
                            <button data-id="1" class="colorRange bg-yellow-400 w-5 h-5 rounded-full border-2 border-white focus:ring-2 focus:ring-offset-0  focus:ring-orange-500 focus:ml-2"></button>
                            <button data-id="2" class="colorRange bg-gray-800 w-5 h-5 rounded-full border-2 border-white -mr-2 focus:ring-2 focus:ring-offset-0  focus:ring-orange-500 focus:ml-2 "></button>
                            <button data-id="3" class="colorRange bg-slate-400 w-5 h-5 rounded-full border-2 border-white -mr-2 focus:ring-2 focus:ring-offset-0  focus:ring-orange-500 focus:-ml-0"></button>
                        </div>
                    </div>
                    <!--contnt title  -->
                    <div class="pt-2">
                        <h3 class="text-slate-900 text-sm font-bold">${element.title}</h3>
                    </div>
                    <!-- content price -->
                    <div class="pt-2">
                        <span class="text-orange-700 text-xs">${element.price} تومان</span>
                    </div>
                    <hr class="mt-2 bg-orange-700">
                    <!-- contet -->
                    <button class="w-full pt-2 text-orange-700 text-xs sm:text-sm font-bold">مشاهده و سفارشات</button>
                </div>
            </div>`;
        });
        productsMobileData.innerHTML = resault;
    }
    colorRange(products){
        const colors = document.querySelectorAll(".colorRange");
        colors.forEach((item)=>{
            item.addEventListener("click" , function(){
                const id = parseInt(this.dataset.id);
                const imgSrc =  this.parentNode.parentNode.parentNode.parentNode.children[0].children[0];
                switch(id){
                    case 1 :
                        imgSrc.src = "./../assets/images/gold.png";
                    break;
                    case 2 :
                        imgSrc.src = "./../assets/images/black.png"
                    break;
                    case 3:
                        imgSrc.src = "./../assets/images/gray.png"
                    break;
                }
            });
        });
    }
    sortProduct(){
        const span = document.createElement('span');
        span.className = "w-2 h-2 rounded-full bg-orange-500 absolute top-3 -left-2";
        const sortClassList = "text-slate-800 font-bold relative".split(" ");
        sortSections.forEach((sortSection)=>{
            sortSection.addEventListener("click" , function(){
                sortSections.forEach((item)=>{
                    sortClassList.forEach((string)=>{
                        item.classList.remove(string);
                    });
                    item.children[1].classList.add("hidden");

                });
                sortClassList.forEach((string)=>{
                    this.classList.add(string);
                });
                this.children[1].classList.remove("hidden");
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const product = new products();
    const newUi = new UI();
    const productData = product.getProducts();
    newUi.displayProducts(productData);
    newUi.colorRange(productData);
    newUi.sortProduct()
});