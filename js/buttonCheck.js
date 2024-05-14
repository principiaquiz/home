document.addEventListener('DOMContentLoaded', function () {
    let cardGradeButtons = document.querySelectorAll('.card__grade');
    let resposta1Buttons = document.querySelectorAll('.resposta1');


    resposta1Buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, resposta1Buttons);
            checkConditions();
        });
    });

    function toggleButton(clickedButton, buttons) {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        clickedButton.classList.add('active');
    }

    function checkConditions() {
        const enviarRespostaButton = document.getElementById('enviarResposta');

        const resposta1Active = document.querySelector('.resposta1.active');

        if (enviarRespostaButton && resposta1Active) {
            // Ativa o botão se todas as condições são atendidas
            enviarRespostaButton.removeAttribute('disabled');
            enviarRespostaButton.classList.add('active');
        } else {
            // Desativa o botão se alguma condição não for atendida
            enviarRespostaButton.setAttribute('disabled', 'true');
        }
    }
});
