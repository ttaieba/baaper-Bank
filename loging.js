document.getElementById('log-submit').addEventListener('click', function () {
    const x = document.getElementById('email-field');
    const y = x.value;
    const m = document.getElementById('pass-field');
    const n = m.value;

    if (y == 'sontan@gmail.com' && n == 'taieba7370') {
        window.location.href = 'index.html'
    }
});
