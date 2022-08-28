"use strict";

const rules = document.querySelector(".rules");
const coinHabis = document.querySelector(".coin-habis");
const btnCloseRules = document.querySelector(".close-rules");
const overlay = document.querySelector(".overlay");
const btnRules = document.querySelector(".btn-rules");
const btnSpin = document.querySelector(".spin");
const coinPlayer = document.querySelector(".coin");
// const generateId = () => Math.random().toString(36).substr(2, 18);

let coin = 35;

function putar() {
  const emojis = document.querySelectorAll(".emot");
  const listEmot = ["🍊", "🍉", "🥎", "⭐", "7️⃣"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1500) {
      clearInterval;
      return;
    }
    emojis.forEach((e) => {
      e.textContent = listEmot[i++];
      if (i == listEmot.length) i = 0;
    });
  }, 100);
  setTimeout(function () {
    const x = listEmot[Math.floor(Math.random() * 5)];
    const y = listEmot[Math.floor(Math.random() * 5)];
    const z = listEmot[Math.floor(Math.random() * 5)];
    const arr = [x, y, z];
    // console.log(x, y, z);
    let o = 0;
    emojis.forEach((e) => {
      e.textContent = arr[o++];
    });
    const hasil = arr.filter(function (v, i, s) {
      return s.indexOf(v) !== i;
    });
    if (hasil.length === 0) {
      coin -= 5;
    } else if (hasil.length === 1) {
      switch (hasil[0]) {
        case "🍊":
        case "🍉":
          coin = coin;
          break;

        case "🥎":
        case "⭐":
          coin += 2;
          break;
        case "7️⃣":
          coin += 5;
          break;

        default:
          break;
      }
    } else if (hasil.length === 2) {
      switch (hasil[0]) {
        case "🍊":
        case "🍉":
          coin += 3;
          break;

        case "🥎":
        case "⭐":
          coin += 5;
          break;
        case "7️⃣":
          coin += 15;
          break;

        default:
          break;
      }
    }
    coinPlayer.textContent = coin;
  }, 1500);
}

function checkCoin() {
  coinHabis.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

btnSpin.addEventListener("click", function () {
  if (coin < 0) {
    coin = 0;
    checkCoin();
  } else {
    putar();
  }
});

btnRules.addEventListener("click", function () {
  rules.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseRules.addEventListener("click", function () {
  rules.classList.add("hidden");
  overlay.classList.add("hidden");
});

// window.onload = function () {
//     console.log(getUserClientId())
//     if (getUserClientId()) {
//         setUserClientId()
//     } else {
//         return 'id ada'
//     }
// };

// const id = generateId()
// const setUserClientId = async () => {
// //   console.log(generateId);
//   return localStorage.setItem(id, 35);
// };
// const getUserClientId = () => {
// //   console.log(generateId);
//   return localStorage.getItem(id);
// };
// const cleanUserClientId = () => {
//   localStorage.removeItem(id);
// };
