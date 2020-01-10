function showCart() {
    $(this)
        .parent()
        .find("div")
        .css("display", "block");
}

// remove elements from cart
function removeElementFromCart(price) {
    var removeButtons = $(".remove");
    for (var i = 0; i < removeButtons.length; i++)
        removeButtons[i].onclick = function() {

           tempAlert("Produsul a fost eliminat!",5000);
            $(this).parent()
                .fadeOut("slow", function() {
                    $(this).remove();
                })
            var pret = $(this).siblings("b").text();
            decreaseTotalPrice(pret);
        };
}

function displayCartOnClick() {
    $("#cart").click(showCart);
}

function addToTotalPrice(price) {
    var total = $("#total")
        .children()
        .text()
        .split(" R")[0];
    var sum = parseFloat(total) + parseFloat(price);
    $("#total")
        .children()
        .html(sum);
}

function createProduct() {
    var parent = $(this).parent().parent();
    var imageElement = parent.find("img").attr("src");
    var description = parent.find(".descriere").text();
    var price = parent.find(".price").text();
    var oldDivContent = $("#shopping").html();
    var imgElement = "<img class='widgetImg' src='" + imageElement + "'>";
    var buttonMinus = "<button class='remove'> &times;</button>";
    var divElement = 
        "<div class='produs'>" +
        imgElement + description + "<b>"+ price +"</b>"+ buttonMinus + "</div>";
    $("#shopping").html(divElement + oldDivContent);
    var parsePrice = price.split(" R")[0];
    addToTotalPrice(parsePrice);
    removeElementFromCart(parsePrice);
}

function setButtonsAddToCart() {
    var buttonsAddToCart = $(".cart");

    for (var i = 0; i < buttonsAddToCart.length; i++)
        buttonsAddToCart[i].onclick = createProduct;
}

function decreaseTotalPrice(price) {
    var total = $("#total")
        .children()
        .text()
        .split(" R")[0];
    sum = total - parseFloat(price);
    $("#total")
        .children()
        .html(sum);
}

/*alert remove item*/
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:5%;left:35%;color: red;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
displayCartOnClick();
setButtonsAddToCart();
