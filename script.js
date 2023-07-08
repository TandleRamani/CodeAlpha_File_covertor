const convertBtn = document.getElementById('convertBtn');
const textArea = document.getElementById('textArea');
const downloadLink = document.getElementById('downloadLink');

convertBtn.addEventListener('click', function() {
    const text = textArea.value;
    const file = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    downloadLink.href = url;
});
