document.addEventListener('DOMContentLoaded', () => {
    const inputbox = document.getElementById('inputbox');
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText == 'AC') {
                inputbox.value = '';
            } else if (e.target.innerText == 'Del') {
                if (inputbox.value === 'Error') {
                    inputbox.value = '';
                } else {
                    inputbox.value = inputbox.value.slice(0,-1);
                }
            } else if (e.target.innerText == '=') {
                try {
                    inputbox.value = eval(inputbox.value);
                } catch {
                    inputbox.value = 'Error';
                }
            } else {
                inputbox.value += e.target.innerText;
            }
        });
    });
});