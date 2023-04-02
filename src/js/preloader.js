import {refs} from './refs'
import 'animate.css';

const img = new Image()
img.src = 'https://media.tenor.com/ycXJZJnD2SwAAAAd/welcome-welcome-message-for-the-group.gif'
let i = 0

window.addEventListener('beforeunload', () => {
    if (i === 0) {
        localStorage.removeItem('preloaderPlayed');
    } else {
        return
    }
})


const linkOnSecondPageLogo = document.querySelector('.nav__logo')

let linkOnSecondPageHome

if (document.querySelector('.nav__li[href="/index.html"]')) {
    // console.log(Boolean(document.querySelector('.nav__li[href="/index.html"]')))
    linkOnSecondPageHome = document.querySelector('.nav__li[href="/index.html"]')
}
if (document.querySelector('.nav__li[href="/filmoteka-team10/index.html"]')) {
    // console.log(Boolean(document.querySelector('.nav__li[href="/filmoteka-team10/index.html]"')))
    linkOnSecondPageHome = document.querySelector('.nav__li[href="/filmoteka-team10/index.html"]')
}

// console.log(linkOnSecondPageHome)
const linkOnSecondPageLibrary = document.querySelector('[href="/my-library.html"]')
let search
let searchTest = document.querySelectorAll('.search-form')
if (searchTest.length > 0){
    search = document.querySelector('.search-form')
    search.addEventListener('submit', onSecondPage)
}

linkOnSecondPageLogo.addEventListener('click', onSecondPage);
linkOnSecondPageHome.addEventListener('click', onSecondPage);
linkOnSecondPageLibrary.addEventListener('click', onSecondPage);
 
if (!localStorage.getItem('preloaderPlayed')) {
    window.addEventListener('load', welcome)
    localStorage.setItem('preloaderPlayed', true);
}
else {
    refs.preloaderGifWrapper.style.display = 'none';
}

function onSecondPage() {
    localStorage.setItem('preloaderPlayed', true)
    i += 1
}

function welcome() {
    refs.preloaderGifImage.setAttribute('src', img.src)
    refs.preloaderGifImage.classList.add('animate__fadeIn')

    setTimeout(() => {
        refs.preloaderGifWrapper.classList.add('animate__fadeOut')
        refs.preloaderGifImage.classList.add('animate__fadeOut')
        setTimeout(() => {
            refs.preloaderGifWrapper.style.display = 'none';
        }, 500)
    }, 2000)
}