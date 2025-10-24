const menuBtn = document.getElementById('menuBtn')
const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn')

univOnclick = (btn, loc) => {
    btn.onclick = () => {
        location.href = loc
    }
}

univOnclick(menuBtn, 'menu.html')
univOnclick(aboutBtn, 'o_nas.html')
univOnclick(contactBtn, 'kontakt.html')