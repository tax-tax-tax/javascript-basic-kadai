btn.addEventListener('click', () => {
    setTimeout(() => {
        const txt = document.getElementById('text');
        const newText = "ボタンをクリックしました";
        txt.textContent = newText;
    }, 2000);
});