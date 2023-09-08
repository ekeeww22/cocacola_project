// header, footer js
const mOpenNav = document.querySelector('.m_open_nav')
const mNavBtn = document.querySelector('.m_nav_btn')
const header = document.querySelector('header')
console.log(mOpenNav, mNavBtn, header)
mNavBtn.addEventListener('click',function(){
    mOpenNav.style.display = 'block'
})
/* 슬라이드 했을 때 header 색상 변경 */
window.addEventListener('scroll',function(){
    if(this.window.scrollY > 100){
        header.style.backgroundColor = '#bf0000'
    }else{
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.00)'
    }
})