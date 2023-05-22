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
// 11 - Criar outro addEventListener "change" para mudar o nome da moeda e a bandeira na aplicação dependendo da opção escolhida
// 12 - Criar a função changeCurrency() e mapear o texto com o nome da moeda e a bandeira respectiva
// 13 - Aplicar o if para alterar o texto (innerHTML) e a imagem da bandeira (src) da moeda escolhida.
// 14 - Chamar a função convertValue() dentro da função changeCurrency.
// 15 - Assim, toda vez que alterar a opção da moeda, ele altera tbm o calculo automaticamente.


const convertButton = document.querySelector("#convert-button")
const convertSelect = document.querySelector(".converter-para")


function convertValue() {
    const inputValue = document.querySelector("#input-currency").value
    const resultReal = document.querySelector(".result-real")
    const resultConverted = document.querySelector(".result-converted")

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

function changeCurrency() {
    const currency = document.querySelector(".currency")
    const flag = document.querySelector(".usa-flag")

    if (convertSelect.value == "dolar") {
        currency.innerHTML = "Dólar Americano"
        flag.src = "./assets/usa-dolar.png"
    }

    if (convertSelect.value == "euro") {
        currency.innerHTML = "Euro"
        flag.src = "./assets/euro.png"
    }

    convertValue()
}


convertSelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValue)

