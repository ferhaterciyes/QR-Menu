import { buttonData } from "./constants.js";
const buttonArea = document.querySelector("#buttons");

//* ekrana menu elemanlarını basar
export function renderMenuItems(menuItems, menuList) {
  //*dizideki her bir elemn için bir menu html i
  //* oluşturup ekrana basma
  menuList.innerHTML = menuItems
    .map(
      (item) => `
     <a href="/detail.html?id=${item.id}" id="card" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3" >
       <img class="rounded shadow img-fluid" src="${item.img}">
           <div>
        <div class="d-flex justify-content-between ">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold" >${(item.price * 30).toFixed(
              2,
            )} ₺</p>
           </div>
          <p class="lead">${item.desc.slice(0, 70) + "..."}</p>

    </div>
   </a>
    `,
    )
    .join(" ");
  // console.log(menuItems);
}

export function renderButtons(active) {
  //* eski eklenen butonları HTML den temizleme

  buttonArea.innerHTML = " ";

  //*yeni butonları oluştıurma
  buttonData.forEach((btn) => {
    //* buton elemanlarını oluşturma
    const buttonElement = document.createElement("button");
    buttonElement.className = "btn btn-outline-dark";

    //* data id belirleme
    buttonElement.dataset.category = btn.value;

    //* tıkladığım butonun eşleşirse active bu klası ver
    if (btn.text === active) {
      buttonElement.classList.add("btn-dark", "text-white");
    }
    buttonElement.innerText = btn.text;
    buttonArea.appendChild(buttonElement);
  });
}
