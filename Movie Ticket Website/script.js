const container = document.querySelector(".seats-container");
const count = document.getElementById("number-of-seats");
const total = document.getElementById("number");
const seats = document.querySelectorAll(".blocks .seat:not(.booked-seat)");
const selectedMovie = document.getElementById("select");
const booking = document.getElementById("number-of-seats");
const selectedSeats = document.getElementsByClassName("selected-count");
const ticketPricee = document.getElementById("select");
let ticketPrice = Number(selectedMovie.value);
const priceToshown = document.getElementById("number");
const containerr = document.getElementsByClassName("seats-container")[0];
const ticket = document.getElementById("ticket")
let arrLocalStorage = [...seats];
getdatafromLocalstorage();
function setMovieData(movieIdx, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIdx);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("booked-seat")
    ) {
      e.target.classList.toggle("selected");
    }
    display();
  });

selectedMovie.addEventListener("change", (e) => {
    ticketPrice = Number(e.target.value);
    setMovieData(e.target.seatsIdx, e.target.value);
    display();
  });

function getdatafromLocalstorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectesSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, idx) => {
      if (selectedSeats.indexOf(idx) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    selectedMovie.seatsIdx = selectedMovieIndex;
  }
}




function display() {
    const selectedSeats = document.querySelectorAll(".blocks .seat.selected");
    const seatsIdx = [...selectedSeats].map(function (ele) {
      return arrLocalStorage.indexOf(ele);
    });
    localStorage.setItem("selectesSeats", JSON.stringify(seatsIdx));
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    ticket.innerText = JSON.parse(localStorage.getItem("selectesSeats"))
  }

display();
