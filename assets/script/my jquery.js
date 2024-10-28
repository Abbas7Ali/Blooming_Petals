$(document).ready(function() {
	$('#dis-close').click(function() {
		$('.discount').remove();
	});
	$('.cart-btn').click(function() {
		var myAlert = " Because Cart is under Construction and not completed yet.";
		alert("ERROR: Your Order Does not completed Successfully."+ myAlert );
	})

	$('#scrolltotop').click(function() {
		  var body = $("html, body");
      body.stop().animate({scrollTop:0}, 800, 'swing', function() { 
           console.log("Page Says: you scrolled to top");
      })

	})

// <---------------------------- Creating a function onclick OrderProduct Button to Get their values in Variables to store ------------------------------->
		  $(".btn-purchase").on('click', function () {
        var $productTitle = $(this).parent().prev().prev().prev().text();
        var $productPrice = $(this).parent().prev().html();
        var $productDiscount = $(this).parent().parent().prev().children('h5').text();
        var $productImage = $(this).parent().parent().prev().children('img').attr('src');
// <-------------------------------------------- Setting All the Details of a Products to the local storage-------------------------------------->
            localStorage.setItem("productTitle", JSON.stringify($productTitle));
            localStorage.setItem("productPrice", JSON.stringify($productPrice));
            localStorage.setItem("productDiscount", JSON.stringify($productDiscount));
            localStorage.setItem("productImage", JSON.stringify($productImage));
    });

// <----------------Getting All the Details of a Product from the local storage and also Creating new Elements in Product Details Page ------------------->
		    var prodTitle = $(".item-details");
  var newProductTitle = document.createElement("h1");
  prodTitle.prepend(newProductTitle);
  newProductTitle.innerHTML = JSON.parse(localStorage.getItem("productTitle"));

var breadTitle = $(".bread-titled");
 var productNewTitle = document.createElement("p");
    breadTitle.prepend(productNewTitle);
  productNewTitle.innerHTML = JSON.parse(localStorage.getItem("productTitle"));


  var imgCont = $(".pro-img");
      var newImage= $(".pro-img").children('img').attr('src');
      newImage = JSON.parse(localStorage.getItem("productImage"));

newProduct = $('<img>', {"src": newImage});
imgCont.append(newProduct);

  var newPrice = $(".new-priced");
    newPriced = document.createElement('p')
    newPriced.innerHTML = JSON.parse(localStorage.getItem("productPrice"));
  newPrice.prepend(newPriced);

  var newDiscount = $('.new-priced');
    newDiscounted = document.createElement('span');
    newDiscounted.setAttribute("class", "detail-discount");
    newDiscounted.innerHTML = JSON.parse(localStorage.getItem("productDiscount"));
  newDiscount.append(newDiscounted); 


	





})

