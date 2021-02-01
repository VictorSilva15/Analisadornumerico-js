let arrayNumber = [];

function adicionarNumero() {
  let num = document.querySelector("#num").value;
  if (Number(num).length == 0 || Number(num) < 1 || Number(num) > 100) {
    alert("Campo inválido");
  } else {
    if (arrayNumber.includes(Number(num))) {
      alert("Valor já inserido");
    } else {
      arrayNumber.push(Number(num));
      let showValues = document.querySelector(".numAdicionado");
      showValues.innerHTML += `Valor ${
        arrayNumber[arrayNumber.length - 1]
      } adicionado </br>`;
    }
  }
}

function finalizar() {
  if (arrayNumber.length == 0) {
    alert("Adicione valores para continuar");
  } else {
    let results = document.querySelector(".res .valores");
    results.innerHTML = "";

    const numbersLength = function () {
      results.innerHTML += `->  Ao todo temos <b>${arrayNumber.length}</b> elementos</br>`;
    };

    const numberMax = function () {
      let maior = 0;
      arrayNumber.forEach(function (item) {
        if (item > maior) {
          maior = item;
        }
      });
      results.innerHTML += `->  O maior valor informado foi <b>${maior}</b></br>`;
    };

    const numberMin = function () {
      let menor = 101;
      arrayNumber.forEach(function (item) {
        if (item < menor) {
          menor = item;
        }
      });
      results.innerHTML += `->  O menor valor informado foi <b>${menor}</b></br>`;
    };
    let soma = 0;
    const somaValues = function () {
      arrayNumber.forEach(function (item) {
        return (soma += item);
      });
      results.innerHTML += `-> Somando todos os valores temos <b>${soma}</b></br>`;
    };

    const mediaValues = () => {
      let media = soma / arrayNumber.length;
      results.innerHTML += `-> A média dos valores digitados é <b>${media}</b></br>`;
    };
    numbersLength();
    numberMax();
    numberMin();
    somaValues();
    mediaValues();
  }
}
