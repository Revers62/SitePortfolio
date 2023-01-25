const btnDarkMode = document.querySelector('.dark-mode-btn');



if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark'); 
}else if(localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}


window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorSheme = event.matches ? 'dark' : 'light';

    if (newColorSheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }else{
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

btnDarkMode.onclick = (isDarkMode) => {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    document.body.classList.toggle('dark');
    const isDark = btnDarkMode.classList.contains('dark-mode-btn--active');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'ligt');
    }

}