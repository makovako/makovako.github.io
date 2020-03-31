const en = document.getElementById('en')
const sk = document.getElementById('sk')

const right = document.getElementById('right') // to sk
const left = document.getElementById('left') // to en

left.addEventListener('click', () => {
    sk.style.opacity = 0
    setTimeout(() => {
        sk.style.display = 'none'
        en.style.opacity = 0
        en.style.display = 'flex'
        setTimeout(() => {
            en.style.opacity = 1
        }, 250);
    }, 500);
})

right.addEventListener('click', () => {
    en.style.opacity = 0
    setTimeout(() => {
        en.style.display = 'none'
        sk.style.opacity = 0
        sk.style.display = 'flex'
        setTimeout(() => {
            sk.style.opacity = 1
        }, 250);
    }, 500);
})

