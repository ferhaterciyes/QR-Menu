//* URL deki arama parametrelerini yönetebilmek için yerleşik bir
//* Js clası bulunuyor * URLSearchParams  kullanılır*/

const params =new URLSearchParams(location.search)
// console.log(params.get('id'));

const paramId = params.get("id")
// console.log(paramId);
document.addEventListener("DOMContentLoaded",async()=>{
const res = await fetch("../db.json")
const data = await res.json()

//* url deki id ye denk gelen ürünü bulma
const product = data.menu.find((i)=> i.id == paramId)
// console.log(product);
renderPage(product)
})
//*arayüzü göndereceğim div
const outlet = document.querySelector("#outlet")
function renderPage(product){
// alert('sayfa ürüne göre ekrana basılıyor')
outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5 px-5">
           <a href="/" >
         <img src="/images/home.png" style="width: 40px;">
           </a>

    <div> anasayfa / ${product.category} /${product.title.toLowerCase()} </div>
    </div>

          <h1 class="text-center my-3 shadow rounded p-2">
          ${product.title}
          </h1>


          <img src="${product.img}" class="rounded  object-fit-cover shadow-lg img-fluid" 
             style= "max-height: 400px; ">
    <div>
          <h3 class="mt-4">Ürünün kategorisi : <span class="text-success">${product.category}</span></h3>
          <h3 class="my-2">Ürünün fiyatı : <span class="text-success">${((product.price) * 30).toFixed(2)} ₺</span></h3>

    </div>
            <p class="lead fs-3">${product.desc}</p>


`

console.log(product);
}