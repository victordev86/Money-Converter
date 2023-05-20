// 1 - Primeiro mapear o <button> de conversão
// 2 - Criar addEventListener para quando eu clicar no botão, ele pegar o valor de denro do <input>
// 3 - Criar uma função "convertValue()", onde eu mapeio o valor do <input>
// 4 - Inserir o convertValue() no addEventListener junto ao "click"
// 5 - Criar variável dolarToday com a cotação do dolar e o euroToday com a cotação do euro
// 6 - Mapear o resultado em Real "result-real" e o resuldado da conversão "result-converted" com querySelector
// 7 - Mapear o <select> para fazer a opção entre dolar e euro
// 8 - Alterar o valor em Real (R$) que aparece na aplicação com o innerHTML e formatar usando o Intl.NumberFormat
// 9 - Utilizar o "if" para definir a opcão a ser utilizada se é dolar ou euro
// 10 - Formatar ambas opções e a operação será o valor do imput / pela cotação da moeda escolhida.


const convertButton = document.querySelector("#convert-button")

function convertValue() {
    const inputValue = document.querySelector("#input-currency").value
    const resultReal = document.querySelector(".result-real")
    const resultConverted = document.querySelector(".result-converted")
    const convertSelect = document.querySelector(".converter-para")

    const dolarToday = 5.2
    
    const euroToday = 6.3


    if (convertSelect.value == "dolar") {
        resultConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (convertSelect.value == "euro") {
        resultConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    resultReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

convertButton.addEventListener("click", convertValue)

