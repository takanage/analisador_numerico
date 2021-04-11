let num = document.getElementById('num')
let tab = document.getElementById('valtab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}   
function adicionar () { 
    if (isNumero(num.value) && !isLista(num.value, valores)) {
         var n = Number(num.value)    
         let item = document.createElement('option')
         item.text = `Valor ${n} adicionado.`
         item.value = `tab${n}`
         tab.appendChild(item)
         valores.push(n)
         res.innerHTML = ''

         
    } else {
        alert('Número Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>`
        res.innerHTML += `<p> ➕ O maior valore é: ${maior}.<p>`
        res.innerHTML += `<p> ➖ O menor valore é: ${menor}.<p>`
        res.innerHTML += `<p> 🧮 A soma dos valores é: ${soma}.<p>`
        res.innerHTML += `<p> Ⓜ️ A média dos valores é: ${media.toFixed(2).replace(".", ",")}.<p>` 


    }


}


