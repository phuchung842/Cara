const bar = document.getElementById('bar');
const closebar = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('nav-active');
    })
}

if (closebar) {
    closebar.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    })
}

var mainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img")

for (let index = 0; index < smalling.length; index++) {
    var SmallImg = smalling[index];
    SmallImg.onclick = function() {
        mainImg.src = this.src
    };
}

$("#cart").find("input").change(function() {
    console.log("=========================================")
        // console.log($(this));

    let row = $(this).parent().parent();
    let all_row = row.parent().find("tr");

    // console.log(row);
    // console.log(all_row);

    let price_element = row.find("td:nth-child(4)");
    let qty_element = $(this);

    // console.log(price_element);
    // console.log(qty_element);

    price = Number(price_element.attr("value"));
    qty = Number(qty_element.val());

    console.log(price);
    console.log(qty)

    let subtotal = price * qty;
    let subtotal_element = row.find("td:last-child");
    set_txt_subtotal = subtotal_element.text(`$${subtotal}`);
    set_val_subtotal = subtotal_element.attr("value", subtotal);

    let subtotalcart = 0;
    all_row.each(function() {
        console.log($(this));
        let subtotal_item_ele = $(this).find("td:last-child");
        let subtotal_item = Number(subtotal_item_ele.attr("value"));
        subtotalcart = subtotalcart + subtotal_item;
    });

    console.log(subtotalcart);

    let body = row.parents("body")
    let cart_add_ele = body.find("#cart-add");
    let subtotal_cart_ele = cart_add_ele.find("#subtotal").find("table").find("#subtotalcart").find("td:last-child");

    let shipping_ele = cart_add_ele.find("#subtotal").find("table").find("#shipping").find("td:last-child");

    let total_ele = cart_add_ele.find("#subtotal").find("table").find("#total").find("td:last-child");

    subtotal_cart_ele.attr("value", subtotalcart);
    subtotal_cart_ele.text(`$${subtotalcart}`);

    let shipping_fee = Number(shipping_ele.attr("value"));
    let total = subtotalcart + shipping_fee;

    total_ele.attr("value", total);
    total_ele.text(`$${total}`);
});