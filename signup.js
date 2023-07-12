const uname = document.getElementById('uname');
 const show = document.getElementById('show'); 
const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 500,
    allowTouchMove: false,
  });
const Show = () =>{
  show.innerHTML = `${uname.value}  You're all good to go`;
}
const gotoSlide = (index) => {
  localStorage.setItem('uname',JSON.stringify(uname.value));
  swiper.slideTo(index);
};
  const restart = () => {
    const inputs = document.querySelectorAll("input");
    const buttons = document.querySelectorAll("button[type=button]"); 
    buttons.forEach((button) => {
      button.disabled = true;
    });
      inputs.forEach((input) => {
      input.value = "";
    });
    gotoSlide(0);
  }; 
  const checkValid = (event) => {
    if(event.target.value.length>0){
      event.target.nextElementSibling.disabled = false;      
    }}
// event.target.nextElementSibling.disabled = !event.target.value.length;}; 
function signup(){
document.location.href="index-after-login.html";
}
let ArrayName = new Array(uname.value);

