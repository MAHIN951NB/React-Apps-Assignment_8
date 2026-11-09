let flag = false

// one-time setup: smooth transitions + gold color for the active link
const setup = () => {
    if (document.getElementById('theme-style')) return

    const style = document.createElement('style')
    style.id = 'theme-style'
    style.textContent = `
        body, #navbar, #navbar a, #navbar button {
            transition: background-color 0.7s ease, color 0.7s ease, box-shadow 0.7s ease;
        }
        /* active link in dark mode: brighter gold instead of red */
        body.dark-mode #navbar a.text-red-800 {
            color: #f5d76e !important;
            text-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
        }
        body.dark-mode #navbar a:hover {
            color: #f5d76e;
        }
    `
    document.head.appendChild(style)
}

export const dark = () => {
    setup()

    const body = document.body
    const navbar = document.getElementById('navbar')

    if (!flag) {
     
        body.classList.add('dark-mode')
        body.style.backgroundColor = '#000000'
        body.style.color = '#d4af37'            // premium gold
        if (navbar) {
            navbar.style.backgroundColor = '#5a3a22'   // wooden brown
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)'
        }
        flag = true
    } else {
      
        body.classList.remove('dark-mode')
        body.style.backgroundColor = '#ffffff'
        body.style.color = '#000000'
        if (navbar) {
            navbar.style.backgroundColor = '#ffffff'
            navbar.style.boxShadow = ''
        }
        flag = false
    }
}