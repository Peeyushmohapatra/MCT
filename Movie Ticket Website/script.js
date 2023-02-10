const seats = document.getElementsByClassName("seat");
const price = document.getElementById("number");
const booking = document.getElementById("number-of-seats");
const selectedSeats = document.getElementsByClassName("selected-count");
const ticketPrice = document.getElementById("select");
const priceToshown = document.getElementById("number");
const container = document.getElementsByClassName("seats-container")[0];
let arrLocalStorage = [];
const display = document.getElementById("bookedSeats");
const ticket = document.getElementById("ticket");



localStorage.setItem("selectedMoviePrice", ticketPrice.value);
// localStorage.setItem("selectedSeats",arrLocalStorage);

for (let i = 0; i < seats.length; i++) {
  let flag = true;
  let ele = seats[i];
  ele.addEventListener("click", () => {
    let backColor = "rgb(49,215,169)";
    let othercolor = "rgb(1,22,62)";
    // console.log(flag);

    if (flag === true) {
      flag = false;
      ele.setAttribute("class", "selected-count");
      arrLocalStorage.push(i);
    } else {
      flag = true;
      ele.setAttribute("class", "seat");
      const ans = arrLocalStorage.indexOf(i);
      arrLocalStorage.splice(ans, 1);
    }
    booking.innerText = selectedSeats.length;
    priceToshown.innerText = selectedSeats.length * ticketPrice.value;
    ticket.innerText = JSON.parse(localStorage.getItem("selectedSeats"))
  });
}
ticketPrice.addEventListener("change", () => {
  booking.innerText = selectedSeats.length;
  priceToshown.innerText = selectedSeats.length * ticketPrice.value;
  localStorage.setItem("selectedMoviePrice", ticketPrice.value);
});

setInterval(() => {
    if(arrLocalStorage !== null && arrLocalStorage.length > 0){
        localStorage.setItem("selectedSeats", JSON.stringify(arrLocalStorage));

    }
}, 100);


setTimeout(() => {
    const ans = JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(ans);
    for(let i=0; i<ans.length; i++){
        let a = ans[i];
        seats[i].setAttribute("class","selected-count")
    }
    
},1000) 
// localStorage.clear()
