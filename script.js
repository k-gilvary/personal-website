docBody = document.querySelector("body");
mainContent = document.getElementById('main-content');
blackScrn = document.createElement("div");
blackScrn.classList.add("loading");
blackScrnTxt = document.createElement("h1");
blackScrnTxt.classList.add('loading-text', 'loading-text-in');
blackScrnTxt.textContent = "Loading ...";
blackScrn.appendChild(blackScrnTxt);
docBody.insertBefore(blackScrn, docBody.firstChild);
blackScrnTxt.addEventListener('animationend', () => {
    blackScrn.remove();
    mainContent.classList.remove('d-none');
})

const welcomeFade = () => {

    blackScrnTxt.textContent = 'Welcome.';

    
}

setTimeout(welcomeFade, 4000)