import { renderMenuItems, renderButtons } from "./scripts/ui.js";
//*HTML den gelenler
const buttonsArea = document.getElementById("buttons");
const menuList = document.querySelector("#menu-list");
// console.log(menuList);

//! sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", () => {
    fetchMenu();
    renderButtons();
});

//*datayı global scope da tutuyoruz
let data;
//* menu verilerini json dan çeker
async function fetchMenu() {
    const res = await fetch("./db.json");
    data = await res.json();
    renderMenuItems(data.menu, menuList);
    // console.log(data);
}

//* tıklanılan categoryi belirleme
buttonsArea.addEventListener("click", (e) => {
    if (e.target.id !== "buttons") {
        // console.log(e.target.innerText);
        renderButtons(e.target.innerText);
    }
    //* seçili category e erişme
    const selected = e.target.dataset.category;

    if (selected === "all") {
        //* filtreleme yapma

        //*apiden gelenn verileri ekrana bas.
        renderMenuItems(data.menu, menuList);
    } else {
        //* seçili categorye göre filtreler
        const filtred = data.menu.filter((i) => i.category === selected);
        // console.log(data.menu , filtred);

        //*filtrelenmiş veriyi ekrana bas
        renderMenuItems(filtred, menuList);
    }
});
