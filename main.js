
let flights = [
  {
   
    "from":"Pune",
    "to":"Delhi",
    "Departure":"2022-04-25",
    "Arrival":"2022-04-27",
    "depTime":"1:05 AM",
    "arrTime":"2:05 AM",
      "returndepTime":"3:05 PM",
    "returnarrTime":"5:05 PM",
    "price":"2000"
  },
  {
  
    "from":"Kolkata",
    "to":"Chennai",
    "Departure":"2022-04-27",
    "Arrival":"2022-04-29",
 "depTime":"5:05 AM",
    "arrTime":"9:05 AM",
      "returndepTime":"11:35 AM",
    "returnarrTime":"2:05 PM",
"price":"2000"
      },
  {
   
    "from":"Banglore",
    "to":"Mumbai",
    "Departure":"2022-04-26",
    "Arrival":"2022-04-28",
 "depTime":"1:05 AM",
    "arrTime":"2:05 AM",
      "returndepTime":"3:05 PM",
    "returnarrTime":"5:05 PM",
    "price":"3000"
  },
  {
   
    "from":"Indore",
    "to":"Banglore",
    "Departure":"2022-04-28",
    "Arrival":"2022-04-28",
    "depTime":"1:05 AM",
    "arrTime":"2:05 AM",
      "returndepTime":"3:05 PM",
    "returnarrTime":"5:05 PM",
    "price":"3000"
  },
  {
   
    "from":"Indore",
    "to":"pune",
    "Departure":"2022-04-28",
    "Arrival":"2022-04-29",
    "depTime":"1:05 AM",
    "arrTime":"2:05 AM",
      "returndepTime":"3:05 PM",
    "returnarrTime":"5:05 PM",
    "price":"3000"
  }]

/////

function tab(id) {
	

	var returnDate= document.getElementById("return_date");
let one_way = document.getElementById("one-way");
let returnbtn = document.getElementById("return");

if(id=="return"){
	 returnDate.style.display = "block";
	 returnbtn.style.boxShadow  = "10px 10px 10px rgba(80,80,80,.4),inset 2px 2px 10px rgba(80,80,80,.4)";
	 one_way .style.boxShadow  = "none";
}
else{
 returnDate.style.display = "none";
 returnbtn.style.boxShadow  = "none";
	 one_way .style.boxShadow  =  "10px 10px 10px rgba(80,80,80,.4),inset 2px 2px 10px rgba(80,80,80,.4)";
}
}



//////////////////
function flightChecking(){


let returnDate = document.getElementById("return_date");
console.log(returnDate.style.display);

	
if(returnDate.style.display!=='none'){
  returnflight();
}
else{
  oneWay();
}

document.getElementById("form").reset();


}


function oneWay(){
  let origin_city = document.getElementById("origin_city").value;
    let destination_city = document.getElementById("destination_city").value;
    let departure_date = document.getElementById("departure_date").value;
    let return_date = document.getElementById("return_date").value;
    let passenger = document.getElementById("passenger").value;
   let range = document.getElementById("range").value;


  let flight_result = document.getElementById("flight-result");
  var x= flights.length - 1;
  var div="";
for (var i =0; i <= x; i++) {
  let from =flights[i].from;
  let to =flights[i].to;
  let Departure =flights[i].Departure;
  let Arrival =flights[i].Arrival;
  let price =flights[i].price;
  let depTime =flights[i].depTime;
  let arrTime =flights[i].arrTime;

if(range<passenger*price){
div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available under Rs. "+range+" for "+passenger+" Passenger</h4>"
              +"</div>";
              break;
}


 else if(origin_city.toLowerCase()===from.toLowerCase() && destination_city.toLowerCase()===to.toLowerCase())
  {
      if(departure_date ===Departure){
        div+="<div class='flights'>"+
        "<div class='flights-navbar'>"+
                "<div><h2 class='flights-heading1 pt-2'>Total Price : Rs. "+ price*passenger+"</h2></div>"+
                   "<div><h4  class='m-3 pt-2'>Depart Date: "+ Departure+"</h4>"
                +"<h4  class='m-3'>Arrive Date: "+ Arrival +"</h4>"+
                "<h4  class='m-3'>Passenger:  "+ passenger +"</h4>"
                +"</div></div>"
                +"<span class='flights-heading'>"+ from+"</span> <img src='travel.png' class='m-5'> <span  class='flights-heading'>"+ to +"</span>"
                +"<h4  class='m-3 mt-4'>Depart: "+ depTime+"</h4>"
                +"<h4  class='m-3'>Arrive: "+ arrTime +"</h4>"
               +"<button class='flights-btn'>Book this flight</button>"
              +"</div>";
            }
            else{
                  div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available for Departure date : "+ departure_date+"</h4>"
                +
                "<h4 class='flights-heading'> Flight Available for Departure date : "+ Departure+"</h4>"
              +"</div>";
               }
  

}

 else if (i===x ) {
  div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available</h4>"
              +"</div>";
 }

}

 flight_result.innerHTML=div;
}





function   returnflight(){

  let origin_city = document.getElementById("origin_city").value;
    let destination_city = document.getElementById("destination_city").value;
    let departure_date = document.getElementById("departure_date").value;
    let return_date = document.getElementById("return_date").value;
    let passenger = document.getElementById("passenger").value;
 let range = document.getElementById("range").value;
let flight_result = document.getElementById("flight-result");

  var div="";

  var x= flights.length - 1;
for (var i =0; i <= x; i++) {
  let from =flights[i].from;
  let to =flights[i].to;
  let Departure =flights[i].Departure;
  let Arrival =flights[i].Arrival;
  let price =flights[i].price;
  let depTime =flights[i].depTime;
  let arrTime =flights[i].arrTime;
let returndepTime =flights[i].returndepTime;
  let returnarrTime =flights[i].returnarrTime;


if(range<passenger*price*2){
div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available under Rs. "+range+" for "+passenger+" Passenger</h4>"
              +"</div>";
              break;
}


else  if(origin_city.toLowerCase()===from.toLowerCase() && destination_city.toLowerCase()===to.toLowerCase())
  {
      if(departure_date ===Departure){
        if(return_date===Arrival){
        div+="<div class='flights'>"+
        "<div class='flights-navbar'>"+
                "<div><h2 class='flights-heading1 pt-2'>Total Price : Rs. "+ price*passenger*2+"</h2></div>"+
                   "<div><h4  class='m-3 pt-2'>Depart Date: "+ Departure+"</h4>"
                +"<h4  class='m-3'>Arrive Date: "+ Arrival +"</h4>"+
                "<h4  class='m-3'>Passenger:  "+ passenger +"</h4>"
                +"</div></div>"
               
 
  +"<div class='grid'>  <div> <span class='flights-heading'>"+ from
  +"</span> <img src='travel.png' class='m-5'> <span  class='flights-heading'>"+ to +"</span>"+
               " <h4  class='m-3 mt-4'>Depart: "+ depTime+"</h4>"+
                "<h4  class='m-3'>Arrive: "+ arrTime +"</h4></div>"+
                "<div><span class='flights-heading'>"+ to
  +"</span> <img src='travel.png' class='m-5'> <span  class='flights-heading'>"+ from +"</span>"+
               " <h4  class='m-3 mt-4'>Depart: "+ returndepTime+"</h4>"+
                "<h4  class='m-3'>Arrive: "+ returnarrTime +"</h4>"+
                 "</div></div><button class='flights-btn'>Book this flight</button></div>";
               }
               else{
                 div+="<div class='flights'>"+
        "<div class='flights-navbar'>"+
                "<div><h2 class='flights-heading1 pt-2'>Total Price : Rs. "+ price*passenger+"</h2></div>"+
                   "<div><h4  class='m-3 pt-2'>Depart Date: "+ Departure+"</h4>"
                +"<h4  class='m-3'>Return Date: "+ Arrival +"</h4>"+
                "<h4  class='m-3'>Passenger:  "+ passenger +"</h4>"
                +"</div></div>"
               
 
  +"<div class='grid'>  <div> <span class='flights-heading'>"+ from
  +"</span> <img src='travel.png' class='m-5'> <span  class='flights-heading'>"+ to +"</span>"+
               " <h4  class='m-3 mt-4'>Depart: "+ depTime+"</h4>"+
                "<h4  class='m-3'>Arrive: "+ arrTime +"</h4></div>"+
                "<div><h4 class='flights-heading'>No Flight Available for Return date :"+
                return_date +"</h4>"+"<h4 class='flights-heading'>Flight Available for Return date :"+
                Arrival +"</h4>"+
                 "</div></div><button class='flights-btn' style='margin-top:-10px;'>Book this flight</button></div>";
               }
}
               else{
                  div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available for Departure date : "+ departure_date+"</h4>"
                +
                "<h4 class='flights-heading'> Flight Available for Departure date : "+ Departure+"</h4>"
              +"</div>";
               }

}
else if (i===x ) {
  div+="<div >"+
                "<h4 class='flights-heading'>No Flight Available</h4>"
              +"</div>";
 }
}
 flight_result.innerHTML=div;
}