const container = document.querySelector(".seats-container");
const count = document.getElementById("number-of-seats");
const total = document.getElementById("number");
const seats = document.querySelectorAll(".blocks .seat:not(.booked-seat)");
const movieSelect = document.getElementById("select");
const booking = document.getElementById("number-of-seats");
const selectedSeats = document.getElementsByClassName("selected-count");
const ticketPricee = document.getElementById("select");
const priceToshown = document.getElementById("number");
const containerr = document.getElementsByClassName("seats-container")[0];
let arrLocalStorage = [];
const display = document.getElementById("bookedSeats");


poppulateUI()
let ticketPrice = Number(movieSelect.value);



function setMovieData(movieIdx,moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIdx);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}

// console.log(typeof ticketPrice);
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.blocks .seat.selected');
    const seatsIdx = [...selectedSeats].map(function(ele){
        return [...seats].indexOf(ele);
    })
    localStorage.setItem("selectesSeats",JSON.stringify(seatsIdx));
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function poppulateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectesSeats"));
    if(selectedSeats !== null && selectedSeats.length > 0){
      seats.forEach((seat , idx) => {
        if(selectedSeats.indexOf(idx) > -1){
            seat.classList.add("selected")
        }
      }) 
    } 
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null){
        movieSelect.seatsIdx = selectedMovieIndex
    }
}

movieSelect.addEventListener("change",(e) => {
    ticketPrice = Number(e.target.value);
    setMovieData(e.target.seatsIdx,e.target.value);
    updateSelectedCount();
});


container.addEventListener("click",(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains("booked-seat")){
        e.target.classList.toggle("selected");
    }
    updateSelectedCount();
});

updateSelectedCount();
