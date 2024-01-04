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


const input = document.querySelector("#search");
const trs = [...document.querySelectorAll("tr")].slice(1);
console.log(trs);

input.addEventListener("change", () => {
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