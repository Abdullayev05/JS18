// let timer = 0;
// const startbutton = document.getElementById("start");
// const stopbutton = document.getElementById("stop");
// const p = document.getElementById("timer");
// let interval;
// startbutton.addEventListener("click", () => {
//     interval = setInterval(() => {
//         timer++;
//         p.innerText = timer;
//     }, 50);
// });
// stopbutton.addEventListener("click", () => {
//     clearInterval(interval);
// });


// const input = document.querySelector("#search");
// const btn = document.getElementById("#elave_et")
// const add_btn = document.getElementById(".add")
// const name_inp = document.getElementById(".name")
// btn.addEventListener("click", () => {
//   innerHTML += "<tr>" + "<td>" + inp.value + "</td>" + "</tr>"
//   innerHTML += "<tr>" + "<td>" + inp.value + "</td>" + "</tr>"
//   innerHTML += "<tr>" + "<td>" + inp.value + "</td>" + "</tr>"
// });
// const trs = [...document.querySelectorAll("tr")].slice(1);
// console.log(trs);
// input.addEventListener("change", () => {
//   if (!input.value.trim()) {
//     trs.map((tr) => {
//       tr.classList.remove("green");
//     });
//     return;
//   }
//   trs.map((tr) => {
//     tr.classList.remove("green");
//     if (!tr.innerHTML.toLowerCase().includes(input.value.toLowerCase().trim())) {
//       tr.classList.add("green");
//     }
//   });
// });

const input = document.querySelector("#search");
const btn = document.getElementById("elave_et");
const add_btn = document.querySelector(".add");
const name_inp = document.querySelector(".name");

btn.addEventListener("click", () => {
  const table = document.querySelector("table");
  table.innerHTML += "<tr>" + "<td>" + name_inp.value + "</td>" + "</tr>";
});

const trs = [...document.querySelectorAll("tr")].slice(1);
console.log(trs);

input.addEventListener("input", () => {
  if (!input.value.trim()) {
    trs.map((tr) => {
      tr.classList.remove("green");
    });
    return;
  }
  trs.map((tr) => {
    tr.classList.remove("green");
    if (!tr.innerHTML.toLowerCase().includes(input.value.toLowerCase().trim())) {
      tr.classList.add("green");
    }
  });
});
