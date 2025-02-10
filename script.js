const docBody = document.querySelector("body");
const mainContent = document.getElementById('main-content');
const blackScrn = document.createElement("div");
const blackScrnTxt = document.createElement("h1");


const intro = () => {
    blackScrn.classList.add("loading");

    blackScrnTxt.classList.add('loading-text', 'loading-text-in');
    blackScrnTxt.textContent = "Loading ...";
    blackScrn.appendChild(blackScrnTxt);

    docBody.insertBefore(blackScrn, docBody.firstChild);

    blackScrnTxt.addEventListener('animationend', () => {
        blackScrn.remove();
        mainContent.classList.remove('d-none');
    })

    setTimeout(() => blackScrnTxt.textContent = 'Welcome.', 4000)
}

const openTab = (e, tabName) => {
    // hide all tabs
    let tabContent = document.getElementsByClassName('tab-content');
    for(let i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // deactivate tab links
    let tabLinks = document.getElementsByClassName('tab-link');
    for(let i=0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '')
    }

    // make clicked tab active
    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += ' active'
}

// copyright year
const copyYear = document.getElementById('copy-year');
const d = new Date();
let year = d.getFullYear();
copyYear.textContent = year;

// intro();