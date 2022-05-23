let skewed =document.querySelector('.angel');
window.addEventListener('scroll',function(){
    let value = -20 + window.scrollY/14;
    skewed.style.transform = "skewY("+value+"deg)";
})