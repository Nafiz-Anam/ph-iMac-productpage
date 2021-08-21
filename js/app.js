/*==============
All id selection
================*/

//==== ram selector ====\\
const ram1 = document.getElementById("ram-1");
const ram2 = document.getElementById("ram-2");
//==== ssd selector ====\\
const ssd1 = document.getElementById("ssd-1");
const ssd2 = document.getElementById("ssd-2");
const ssd3 = document.getElementById("ssd-3");
//==== delivery selector ====\\
const delivery1 = document.getElementById("delivery-1");
const delivery2 = document.getElementById("delivery-2");
//==== promo selector ====\\
const promoBtn = document.getElementById("promo-btn");
//==== display selector ====\\
const ramPrice = document.getElementById("ram-price");
const ssdPrice = document.getElementById("ssd-price");
const deliveryCost = document.getElementById("delivery-price");
const totalPrice = document.getElementById("total-price");
const finalCost = document.getElementById("final-cost");
const discountPrice = document.getElementById("discount-amount");
//==== promoInput selector ====\\
const promoInput = document.getElementById("promoInput");

/*=====================
All function codes here 
=======================*/

//==== component checking function ====\\
function updatePrices(component, id, isBool) {
    //==== component id making ====\\
    const componentName = component + "-" + id;
    const componentPrice = document.getElementById(component + "-" + "price");
    //==== component id checking ====\\
    if (componentName == "ram-2" || (componentName == "ssd-3" && isBool)) {
        componentPrice.innerHTML = 180;
    } else if (componentName == "delivery-2" && isBool) {
        componentPrice.innerHTML = 20;
    } else if (componentName == "ssd-2" && isBool) {
        componentPrice.innerHTML = 100;
    } else {
        componentPrice.innerHTML = 0;
    }
    //==== updating price on component change ====\\
    totalPriceUpdate();
}

//==== updating price function ====\\
function totalPriceUpdate() {
    const ram = parseInt(ramPrice.innerText);
    const ssd = parseInt(ssdPrice.innerText);
    const delivery = parseInt(deliveryCost.innerText);
    let total = 1299 + ram + ssd + delivery;
    //==== change total price in both places ====\\
    totalPrice.innerText = total;
    finalCost.innerText = total;
}

//==== 20% off promo code apply function ====\\
function promoApply() {
    const total = parseInt(totalPrice.innerText);
    const discount = total * 0.2;
    const newPrice = total - discount;
    discountPrice.innerText = discount;
    finalCost.innerText = newPrice;
}

//==== prevent button default submit ====\\
promoBtn.addEventListener("click", function (e) {
    e.preventDefault();
});

/*===============
all button clicks
=================*/

//==== ram button click ====\\
ram1.addEventListener("click", function () {
    updatePrices("ram", "1", false);
});
ram2.addEventListener("click", function () {
    updatePrices("ram", "2", true);
});

//==== ssd button click ====\\
ssd1.addEventListener("click", function () {
    updatePrices("ssd", "1", false);
});
ssd2.addEventListener("click", function () {
    updatePrices("ssd", "2", true);
});
ssd3.addEventListener("click", function () {
    updatePrices("ssd", "3", true);
});

//==== delivery button click ====\\
delivery1.addEventListener("click", function () {
    updatePrices("delivery", "1", false);
});
delivery2.addEventListener("click", function () {
    updatePrices("delivery", "2", true);
});

//==== promo button click ====\\
let codeActive = false; //==== checking if code applied once or not ====\\
promoBtn.addEventListener("click", function () {
    const code = promoInput.value;
    //==== discount code : "stevekaku" checking ====\\
    if (code == "stevekaku") {
        if (!codeActive) {
            promoApply();
            codeActive = true;
            promoInput.value = "";
            discountPrice.parentElement.parentElement.classList.remove("hide");
        }
        //==== alert message trigger ====\\
        else {
            document.getElementById("alert").classList.remove("hide");
        }
    }
});

// console.log(discountPrice.parentElement.parentElement.classList);

/*===============
end of codes here
=================*/
