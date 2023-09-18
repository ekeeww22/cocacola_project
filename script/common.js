// header, footer js

const header = document.querySelector('header')

/* 슬라이드 했을 때 header 색상 변경 */
/* window.addEventListener('scroll',function(){
    if(this.window.scrollY > 100){
        header.style.backgroundColor = '#bf0000'
    }else{
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.00)'
    }
}) */

/* quick menu - top btn */
const topBtn = document.querySelector('.top_btn')
console.log(topBtn)
topBtn.addEventListener('click',function(){
    window.scrollTo({left:0, top:0})
})
/* m_nav */
const closeBtn = document.querySelector('.close_btn')
const openBtn = document.querySelector('.open_btn')
const mNav = document.querySelector('.m_open_nav')
console.log(closeBtn, openBtn, mNav)
mNav.style.display = 'none'
closeBtn.style.display = 'none'
openBtn.addEventListener('click',function(){
    openBtn.style.display = 'none'
    closeBtn.style.display = 'flex'
    mNav.style.display = 'block'
})
closeBtn.addEventListener('click',function(){
    closeBtn.style.display = 'none'
    openBtn.style.display = 'flex'
    mNav.style.display = 'none'
})