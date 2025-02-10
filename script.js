// get elements
const docBody = document.querySelector("body");
const mainContent = document.getElementById('main-content');

// plays intro sequence
const intro = () => {
    // creates black screen
    const blackScrn = document.createElement("div");
    blackScrn.classList.add("loading");

    //creates black screen text
    const blackScrnTxt = document.createElement("h1");
    blackScrnTxt.classList.add('loading-text', 'loading-text-in');
    blackScrnTxt.textContent = "Loading ...";

    // inserts into page
    blackScrn.appendChild(blackScrnTxt);
    docBody.insertBefore(blackScrn, docBody.firstChild);

    // remove black screen after animations end
    blackScrnTxt.addEventListener('animationend', () => {
        blackScrn.remove();
        mainContent.classList.remove('d-none');
    })

    // switches loading to welcome
    setTimeout(() => blackScrnTxt.textContent = 'Welcome.', 4000)
}

// hides any active tabs and shows clicked
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

intro();