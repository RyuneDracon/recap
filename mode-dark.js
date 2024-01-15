window.addEventListener('DOMContentLoaded', (event) => {
    let light = document.querySelector('#themeLight');
    let dark = document.querySelector('#themeDark');

    let body = document.querySelector("body");

    light.addEventListener('change', (event) => {
        event.target.checked ? body.setAttribute('data-theme', "light") : body.removeAttribute("data-theme");
    });

    dark.addEventListener('change', (event) => {
        event.target.checked ? body.setAttribute('data-theme', "dark") : body.removeAttribute("data-theme");
    });
    
});