const model = document.querySelector('.model');

setTimeout(() => {
    model.style.display = 'none';
}, 5000);

const divPassword = document.querySelector('.passwordHidden').addEventListener('click', () => {
    const text = document.querySelector('#password');
    console.log(text.type);

    if(text.type === 'password') {
        text.type = 'text';

        document.querySelector('.passwordHidden').classList.add('trocarImagem');
    }
    else {
        text.type = 'password';

        document.querySelector('.passwordHidden').classList.remove('trocarImagem');
    }
});
