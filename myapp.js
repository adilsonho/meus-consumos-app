
function calcularDespesas() {
    // Retrieve values from input fields
    var salario = parseFloat(document.getElementById('salario').value);
    var aluguel = parseFloat(document.getElementById('aluguel').value);
    var lazer = parseFloat(document.getElementById('lazer').value);
    var familia = parseFloat(document.getElementById('familia').value);
    var luz = parseFloat(document.getElementById('luz').value);
    var divida = parseFloat(document.getElementById('divida').value);
    var farmacia = parseFloat(document.getElementById('farmacia').value);
    var cursos = parseFloat(document.getElementById('cursos').value);
    var faculdade = parseFloat(document.getElementById('faculdade').value);
   
    // Calculate total expenses
    var despesas = salario - aluguel - lazer - familia - luz - divida - farmacia - cursos - faculdade;
   
    // Display the result
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "Valor restante: R$ " + despesas.toFixed(2);
   }
   