const menuBtn = document.getElementById('menuBtn')
const menuBtn2 = document.getElementById('menuBtn2')
const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn')
const mobileMenu = document.getElementById('mobileMenu')
const clickSpace = document.getElementById('clickSpace')
const hamburgerIcon = document.getElementById('hamburgerIcon')

let count = 0

univLocation = (btn, loc) => {
    if (btn) {
        btn.onclick = () => {
            location.href = loc
        }
    }
}

univLocation(menuBtn, 'menu.html')
univLocation(menuBtn2, 'menu.html')
univLocation(aboutBtn, 'o_nas.html')
univLocation(contactBtn, 'kontakt.html')

clickSpace.onclick = () => {
    mobileMenu.style.display = 'none'
    hamburgerIcon.src = './res/svg/PhList.svg'
    count = 0
}

hamburgerIcon.onclick = () => {
    console.log(count)
    if (count == 0) {
        mobileMenu.style.display = 'block'
        hamburgerIcon.src = './res/svg/PhX.svg'
        count++
    }
    else if (count == 1) {
        mobileMenu.style.display = 'none'
        hamburgerIcon.src = './res/svg/PhList.svg'
        count--
    }
}

if (document.body.style.width >= 768) {
    mobileMenu.style.display = 'none'
}