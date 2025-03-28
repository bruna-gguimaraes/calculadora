let resultado = document.getElementById("resultado");

    function limpar() {
        resultado.value = '';
    }

    function apagar() {
        resultado.value = resultado.value.slice(0, -1);
    }

    function adicionar(valor) {
        resultado.value += valor;
    }

    function calcular() {
        try {
            resultado.value = eval(resultado.value);
        } catch (e) {
            resultado.value = 'Erro';
        }
    }

    // Adiciona funcionalidade de teclado
    document.addEventListener('keydown', function(event) {
        if (event.key >= '0' && event.key <= '9') {
            adicionar(event.key); // Adiciona números
        } else if (event.key === '.') {
            adicionar('.'); // Adiciona ponto
        } else if (event.key === '/') {
            adicionar('/'); // Adiciona divisão
        } else if (event.key === '*') {
            adicionar('*'); // Adiciona multiplicação
        } else if (event.key === '-') {
            adicionar('-'); // Adiciona subtração
        } else if (event.key === '+') {
            adicionar('+'); // Adiciona soma
        } else if (event.key === 'Enter') {
            calcular(); // Realiza o cálculo
        } else if (event.key === 'Backspace') {
            apagar(); // Apaga o último caractere
        } else if (event.key === 'Escape') {
            limpar(); // Limpa a calculadora
        }
    });
