// search start

const searchin = document.getElementById('searchin');
const matchList = document.getElementById('match-list');


const searchStates = async searchText => {
    fetch("https://www.vacationhomerentals.com/content/srp/saut?s=Las%20vegas", { 
  "method": "GET",
  "mode": "no-cors",
}).then(function(response) {
    
    console.log(response)

    if(response.body === null){
        console.log("jannatul");
        const states = [{"id":503358,"Name":"Province of Ragusa, Sicily, Italy","Count":51,"SlashName":"italy\/sicily\/province-of-ragusa-vacation-rentals\/g100503358"},{"id":416298,"Name":"Jerusalem, Jerusalem District, Israel","Count":4,"SlashName":"Israel\/Jerusalem-vacation-rentals\/g2579\/"},{"id":407700,"Name":"Jerusalem District, Israel","Count":4,"SlashName":"israel\/jerusalem-district-vacation-rentals\/g100407700"},{"id":686343,"Name":"Marausa, Trapani, Italy","Count":2,"SlashName":"sicily\/province-of-trapani\/trapani\/marausa-vacation-rentals\/g100686343"},{"id":414003,"Name":"Husafell, West Region, Iceland","Count":2,"SlashName":"iceland\/west-region\/husafell-vacation-rentals\/g100414003"},{"id":414006,"Name":"Husavik, Northeast Region, Iceland","Count":2,"SlashName":"iceland\/northeast-region\/husavik-vacation-rentals\/g100414006"},{"id":574074,"Name":"Llanddeusant, Anglesey, United Kingdom","Count":1,"SlashName":"wales\/north-wales\/anglesey\/llanddeusant-vacation-rentals\/g100574074"}];

// FIlter states
//let matches = searchText => {
 // Get matches to current text input
 let matches = states.filter(state => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return state.Name.match(regex);
 });
 console.log(matches);

 // Clear when input or matches are empty
 if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
 }

 outputHtml(matches);
}

});
};

// Show results in HTML
const outputHtml = matches => {
 if (matches.length >0) {
  const html = matches.map(
    match => `<div class="card card-body mb-1">
    <li style="color: black">${match.Name}</li>
   </div>`
   )
   .join('');
  matchList.innerHTML = html;
  matchList.onclick = function (event) {
  const setValue = event.target.innerText;
  searchin.value = setValue;
  this.innerHTML = "";
};
  
 }
};

searchin.addEventListener('input', () => searchStates(searchin.value));
  
  

// search end 


// Calander start

var hdpkr = new HotelDatepicker(document.getElementById("input-id"));


//Calander end 



// Guest start 

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
    document.getElementById('dropdownBtn2').value = 'Guest';
    document.getElementById('counter').innerHTML = count;
}



var dropdownBtn2 = document.getElementById('dropdownBtn2');

dropdownBtn2.onclick =function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    dropdownContent2.style.display = "block";
    
}

var submit = document.getElementById('submit');

submit.onclick = function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    if(count==0){
      document.getElementById('dropdownBtn2').value = "Guest";
      document.getElementById('counter').innerHTML = count;
    }else{
      document.getElementById('dropdownBtn2').value = count;
      document.getElementById('counter').innerHTML = "0";
    }
    dropdownContent2.style.display = "none";
}

// Guest end 


// Price Range start

var Range1 = document.getElementById('Range1');
var minrange = Number(Range1.value);

var Range2 = document.getElementById('Range2');
var maxrange = Number(Range2.value);

var temp;


var priceRange = document.getElementById('priceRange');
priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;


Range1 = document.getElementById('Range1');

Range1.onchange = function(){

    Range1 = document.getElementById('Range1');
    Range2 = document.getElementById('Range2');

    minrange = Number(Range1.value);
    maxrange = Number(Range2.value);

    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('Range1').value = minrange;
      document.getElementById('Range2').value = maxrange;
    }
    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;
}


Range2 = document.getElementById('Range2');

Range2.onchange = function(){

    Range1 = document.getElementById('Range1');
    Range2 = document.getElementById('Range2');
    
    minrange = Number(Range1.value);
    maxrange = Number(Range2.value);
    
    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('Range1').value = minrange;
      document.getElementById('Range2').value = maxrange;
    }

    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price Range: $"+minrange+"-"+"$"+maxrange;
}



var dropdownBtn3 = document.getElementById('dropdownBtn3');

dropdownBtn3.onclick =function(){
    dropdownContent3 = document.getElementById('dropdownContent3');
    dropdownContent3.style.display = "block";
    
}


var price = document.getElementById('price');

price.onclick = function(){
    dropdownContent3 = document.getElementById('dropdownContent3');
    if(maxrange!=0){
      document.getElementById('dropdownBtn3').value = "$"+minrange+"-"+"$"+maxrange;
      priceRange = document.getElementById('priceRange');
      priceRange.value = "Price Range: $"+"0"+"-"+"$"+"0";
      document.getElementById('Range1').value = "0";
      document.getElementById('Range2').value = "0";
    }
    else{
      document.getElementById('dropdownBtn3').value = "Price range";
    }
    dropdownContent3.style.display = "none";
}


// Price Range end 


//search button sart
var search = document.getElementById('search');
search.onclick = function(){
    var place= searchin.value;
    var location = document.getElementById('place');
    location.innerHTML ="Search : " + place;

    var date = hdpkr.getValue();
    var myArray = date.split(" ");
    
    var checkIn = document.getElementById('checkIn');
    checkIn.innerHTML = "CheckIn: "+myArray[0];

    var checkOut = document.getElementById('checkOut');
    checkOut.innerHTML = "CheckOut: "+myArray[2];
    
    var Guest = document.getElementById("Guest");
    Guest.innerHTML ="Guests : " + count;

    var Price_range = document.getElementById("Price_range");
    Price_range.innerHTML = "Price range : $"+minrange+" - $"+maxrange;
}
//search button end
