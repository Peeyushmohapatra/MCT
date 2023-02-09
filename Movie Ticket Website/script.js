// const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// const seatContainer = document.querySelector(".row-container");
// const count = document.getElementById("count");
// const total = document.getElementById("total");
// const movieSelect = document.getElementById("movie");

// // Another Approach

// // seats.forEach(function(seat) {
// //   seat.addEventListener("click", function(e) {
// //     seat.classList.add("selected");
// //     const selectedSeats = document.querySelectorAll(".container .selected");
// //     selectedSeathLength = selectedSeats.length;
// //     count.textContent = selectedSeathLength;
// //     let ticketPrice = +movieSelect.value;
// //     total.textContent = ticketPrice * selectedSeathLength;
// //   });
// // });

// // localStorage.clear();

// populateUI();

// let ticketPrice = +movieSelect.value;

// // Save selected movie index and price
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
//   localStorage.setItem("selectedMoviePrice", moviePrice);
// }

// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll(".container .selected");

//   seatsIndex = [...selectedSeats].map(function(seat) {
//     return [...seats].indexOf(seat);
//   });

//   localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

//   let selectedSeatsCount = selectedSeats.length;
//   count.textContent = selectedSeatsCount;
//   total.textContent = selectedSeatsCount * ticketPrice;
// }

// // Get data from localstorage and populate
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach(function(seat, index) {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

//   const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }

// // Movie select event

// movieSelect.addEventListener("change", function(e) {
//   ticketPrice = +movieSelect.value;
//   setMovieData(e.target.selectedIndex, e.target.value);
//   updateSelectedCount();
// });

// // Adding selected class to only non-occupied seats on 'click'

// seatContainer.addEventListener("click", function(e) {
//   if (
//     e.target.classList.contains("seat") &&
// !e.target.classList.contains("occupied")
//   ) {
//     e.target.classList.toggle("selected");
//     updateSelectedCount();
//   }
// });

// // Initial count and total rendering
// updateSelectedCount();

const seats = document.getElementsByClassName("seat");
const price = document.getElementById("number");
const booking = document.getElementById("number-of-seats");
const bookingDetails = [];
let count = 0;
let totalPrice = 0;

const select = document.getElementById("select");

select.addEventListener("change",() => {
    totalPrice = +select.value;
    // price.innerText = totalPrice;
})

for (let i = 0; i < seats.length; i++) {
  let flag = true;
  let ele = seats[i];
  ele.addEventListener("click", () => {
    let backColor = "rgb(49,215,169)";
    let othercolor = "rgb(1,22,62)";
    // console.log(flag);
    if (flag === true) {
      flag = false;
      ele.style.backgroundColor = backColor;
      bookingDetails.push(i);
      count++;
      booking.innerText = count;
      totalPrice += Number(document.getElementById("select").value);
      price.innerText = totalPrice;
      //   seatBooked(bookingDetails);
      putinLocalStorage(bookingDetails);
    } else {
      flag = true;
      ele.style.backgroundColor = othercolor;
      count--;
      totalPrice -= Number(document.getElementById("select").value);
      price.innerText = totalPrice;
      booking.innerText = count;
      bookingDetails.pop(ele);
      const stored = JSON.parse(localStorage.getItem("selectedSeats"));
      delete stored[i];
    }
  });
}

function putinLocalStorage(arr) {
  localStorage.setItem("selectedSeats", arr);
}

if(bookingDetails !== null || bookingDetails.length > 0){
    console.log("Hello");
    alreadyBooked()
}

function alreadyBooked() {
  const arr = localStorage.getItem("selectedSeats");
  if(arr !== null && arr.length > 0){
    for (let i = 0; i < arr.length; i++) {
        if(arr.charAt(i) === ','){
            continue
        }
        const ele = JSON.parse(arr[i]);
        console.log(ele);
        seats[ele].style.backgroundColor = "rgb(49,215,169)"
      }
  }
  
}

localStorage.clear()
