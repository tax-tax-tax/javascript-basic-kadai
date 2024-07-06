const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const txt = document.getElementById('text');

    const newText = "ボタンをクリックしました";
    txt.textContent = newText;
});