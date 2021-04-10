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
         tab.innerHTML = ''
         let item = document.createElement('option')
         item.text = `Valor ${n} adicionado.`
         item.value = `tab${n}`
         tab.appendChild(item)
         valores.push(n)
         
    } else {
        alert('Número Inválido ou já encontrado na lista.')
    }
}


