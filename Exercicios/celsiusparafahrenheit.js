/* Celsius em fahrenheit e vice versa

Crie uma funcao que receba uma string em celsius ou fahrenheit e faca a transformacao de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
  const celsiusExistis = degree.toUpperCase().includes('C')
  const fahrenheitExistis = degree.toUpperCase().includes('F')

  //fluxo de erro
  if (!celsiusExistis && !fahrenheitExistis) {
    throw new Error('Grau nao identificado')
  }

  //fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  //fluxo alternativo, C -> F
  if (celsiusExistis) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message) //coloca esse message só para mostrar apenas a mensagem de rro e nao mostrar exatamente onde foi, porque se colocar só error vai mostrar onde foi o erro
}
