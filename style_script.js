function change_theme() {
    document.body.classList.toggle('dark');
}

let btn = document.querySelector('.switch-theme-button i');

function change_theme() {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        btn.classList.replace("fa-toggle-off", "fa-toggle-on");
    } else {
        btn.classList.replace("fa-toggle-on", "fa-toggle-off");
    }
}

document.querySelector('.switch-theme-button')
    .addEventListener('click', change_theme);