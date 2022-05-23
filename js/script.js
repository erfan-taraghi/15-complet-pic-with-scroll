let skewed =document.querySelector('.angel');
window.addEventListener('scroll',function(){
    let value = -25 + window.scrollY/10;
    skewed.style.transform = "skewY("+value+"deg)";
})