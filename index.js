const v = document.getElementById('carouselExampleCaptions');
const shopItem = document.getElementsByClassName('shop');
Array.from(shopItem).map((el)=>el.style.display = 'none') 
function show(){
  v.style.display = "none";
  Array.from(shopItem).map((el)=>el.style.display = 'grid')
}
// const Get = ()=>{
//   let name = JSON.parse(localStorage.getItem("uname"));
//   alert(`welcome ${name} on Gift-Era tap on products to browse them`)
// }
// Get();  