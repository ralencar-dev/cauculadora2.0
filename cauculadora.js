function calcularMedia() {
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
  

   
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').textContent = 'Por favor, insira todas as notas.';
        return;
    }

    
    const media = ((nota1*25)/100) + ((nota2*25)/100) + ((nota3*50)/100)

    
    document.getElementById('resultado').textContent = 'Média: ' + media.toFixed(2);

    
    if (media >= 6) {
        document.getElementById('resultado').textContent += ' - Aprovado';
    } else {
        document.getElementById('resultado').textContent += ' - Reprovado';
    }
}