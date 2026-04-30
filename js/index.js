document.getElementById('languageSelect').addEventListener('change', function (e) {
    if (e.target.value === 'jp') {
        location.href = './index-jp.html';
    } else if (e.target.value === 'en') {
        location.href = './index.html';
    }
});