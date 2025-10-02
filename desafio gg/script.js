// script.js

// Definir o número secreto aleatório
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

// Função para verificar o palpite do jogador
function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const mensagem = document.getElementById('mensagem');
    const tentativasRestantes = document.getElementById('tentativas');
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
        mensagem.style.color = "red";
        return;
    }
    
    tentativas--;
    
    if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior.";
        mensagem.style.color = "blue";
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor.";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "Parabéns! Você acertou o número secreto!";
        mensagem.style.color = "green";
        document.querySelector("button").disabled = true;
        return;
    }
    
    if (tentativas === 0) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        mensagem.style.color = "red";
        document.querySelector("button").disabled = true;
    }

    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
    
    // Limpar o campo de entrada
    document.getElementById('palpite').value = '';
}
