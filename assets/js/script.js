// Place search section start here

/*var place;
var cnt = 0;
var inputField = document.getElementById("searchInput");

inputField.onkeyup = function(){
  var word = document.getElementById("searchInput").value;
  cnt = word.length;
  if(cnt >= 2){
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('searchInput')),{
        types: ['geocode'],
    });

    google.maps.event.addListener(autocomplete,"place_changed",function(){
        place = autocomplete.getPlace();
        console.log(place.formatted_address);
    });
  }
}*/


// place search section end here


// Calander section start here

var hdpkr = new HotelDatepicker(document.getElementById("input-id"));


//Calander section end here



// Guest Section start here

var count = 0;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.onclick = function(){
    count += 1;
    document.getElementById('counter').innerHTML = count;
}
minus.onclick = function(){
    if(count<=0){
        count = 0;
        document.getElementById('counter').innerHTML = count;
    }else{
        count-=1;
        document.getElementById('counter').innerHTML = count;
    }
}

if(count == 0){
    document.getElementById('dropdownBtn3').value = 'Guest';
    document.getElementById('counter').innerHTML = count;
}



var dropdownBtn3 = document.getElementById('dropdownBtn3');

dropdownBtn3.onclick =function(){
    var dropdownContent3 = document.getElementById('dropdownContent3');
    dropdownContent3.style.display = "block";
    
}

var submit = document.getElementById('submit');

submit.onclick = function(){
    var dropdownContent3 = document.getElementById('dropdownContent3');
    if(count==0){
      document.getElementById('dropdownBtn3').value = "Guest";
      document.getElementById('counter').innerHTML = count;
    }else{
      document.getElementById('dropdownBtn3').value = count;
      document.getElementById('counter').innerHTML = "0";
    }
    dropdownContent3.style.display = "none";
}

// Guest Section end here


// Price Range Section start here

var customRange1 = document.getElementById('customRange1');
var minrange = Number(customRange1.value);

var customRange2 = document.getElementById('customRange2');
var maxrange = Number(customRange2.value);

var temp;


var priceRange = document.getElementById('priceRange');
priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;


customRange1 = document.getElementById('customRange1');

customRange1.onchange = function(){

    customRange1 = document.getElementById('customRange1');
    customRange2 = document.getElementById('customRange2');

    minrange = Number(customRange1.value);
    maxrange = Number(customRange2.value);

    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('customRange1').value = minrange;
      document.getElementById('customRange2').value = maxrange;
    }
    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;
}


customRange2 = document.getElementById('customRange2');

customRange2.onchange = function(){

    customRange1 = document.getElementById('customRange1');
    customRange2 = document.getElementById('customRange2');
    
    minrange = Number(customRange1.value);
    maxrange = Number(customRange2.value);
    
    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('customRange1').value = minrange;
      document.getElementById('customRange2').value = maxrange;
    }

    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price Range: $"+minrange+"-"+"$"+maxrange;
}



var dropdownBtn4 = document.getElementById('dropdownBtn4');

dropdownBtn4.onclick =function(){
    dropdownContent4 = document.getElementById('dropdownContent4');
    dropdownContent4.style.display = "block";
    
}


var price = document.getElementById('price');

price.onclick = function(){
    dropdownContent4 = document.getElementById('dropdownContent4');
    if(maxrange!=0){
      document.getElementById('dropdownBtn4').value = "$"+minrange+"-"+"$"+maxrange;
      priceRange = document.getElementById('priceRange');
      priceRange.value = "Price Range: $"+"0"+"-"+"$"+"0";
      document.getElementById('customRange1').value = "0";
      document.getElementById('customRange2').value = "0";
    }
    else{
      document.getElementById('dropdownBtn4').value = "Price range";
    }
    dropdownContent4.style.display = "none";
}


// Price Range section end here


//search button sart
var search = document.getElementById('search');
search.onclick = function(){
    //var location = document.getElementById('location');
    //location.innerHTML ="Search : " + place.formatted_address;
    
    var checkIn_checkOut = document.getElementById('checkIn_checkOut');

    var date = hdpkr.getValue();

    checkIn_checkOut.innerHTML = "CheckIn & CheckOut: "+date;
    
    var Guest = document.getElementById("Guest");
    Guest.innerHTML ="Guests : " + count;

    var Price_range = document.getElementById("Price_range");
    Price_range.innerHTML = "Price range : $"+minrange+" - $"+maxrange;
}
//search button end



