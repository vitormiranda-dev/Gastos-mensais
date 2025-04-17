function calcular() {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Obtém os valores dos campos e converte para número (tratando campos vazios como 0)
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const aluguel = parseFloat(document.getElementById('aluguel').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;
    const energia = parseFloat(document.getElementById('energia').value) || 0;
    const cartao_nubank = parseFloat(document.getElementById('cartao_nubank').value) || 0;
    const cartao_inter = parseFloat(document.getElementById('cartao_inter').value) || 0;

    // Calcula o total das despesas
    const totalDespesas = aluguel + internet + energia + cartao_nubank + cartao_inter;

    // Calcula o saldo restante
    const saldoRestante = salario - totalDespesas;

    // Formata os valores para moeda brasileira (R$)
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Atualiza os resultados na página
    document.getElementById('total_despesas').textContent = 
        `Total das despesas: ${formatador.format(totalDespesas)}`;
    
    document.getElementById('saldo_restante').textContent = 
        `Saldo restante: ${formatador.format(saldoRestante)}`;
}


  