/* Sistema de gastos familiar

Crie um obejto que possuirá 2 propriedades, ambas do tipo array:
*receitas: []
*despesas: []

Agora, crie uma funcao que irá calcular o toal de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
  incomes: [1500, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450, 237.56, 1234]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calulateExpenses = sum(family.expenses)

  const total = calculateIncomes - calulateExpenses

  const itsOK = total >= 0

  let balanceText = 'negativo'

  if (itsOK) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()
