const img = document.querySelector('img')
function callBack(event){
    console.log(event)
}

// img.addEventListener('click', callBack)


// img.addEventListener('click', function(){
//     console.log('clicou')
// })

const imgss = document.querySelector('.animais-lista')
function callBackLista(event){
    console.log(event.target);
}

// imgss.addEventListener('click', callBackLista)


// console.log(imgs)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault()
    console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)

}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)

function handleKeyboard(event){
    if(event.key === 'f'){
    document.body.classList.toggle('azul')
    }
}
window.addEventListener('keydown', handleKeyboard)


 const imgs = document.querySelectorAll('img')

function handleImg(event){
console.log(event.target)
}

 imgs.forEach((img)=> {
    img.addEventListener('click', handleImg)
 })