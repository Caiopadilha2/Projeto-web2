const options = document.querySelectorAll('.options')
const reset = document.querySelector('.reset')
const count = document.querySelector('.count')
const pontos = document.querySelector('.pontuacao')
const screen = document.querySelector('.question')
const getInput = document.querySelector('.cod')
const btnIniciar = document.querySelector('.btn-submit')
const imagem = document.querySelector('.imagem')

const images1 = ['./assets/Question-01.png', './assets/Question-02.png', './assets/Question-03.png']
const images2 = []
const images3 = []
const images4 = []

let gabarito
let imagensGabarito

btnIniciar.addEventListener('click', event => {
  // Ver se da para tirar o evento de submit
  event.preventDefault()
  let codInput = getInput.value

  switch (codInput) {
    case '101':
      gabarito = gabarito1
      imagensGabarito = images1
      play_game.play()
      alert('Jogo iniciado!')
      break
    case '102':
      gabarito = gabarito2
      imagensGabarito = images2

      play_game.play()
      alert('Jogo iniciado!')
      break
    case '103':
      gabarito = gabarito3
      imagensGabarito = images3

      play_game.play()
      alert('Jogo iniciado!')
      break
    case '104':
      gabarito = gabarito4
      imagensGabarito = images4

      play_game.play()
      alert('Jogo iniciado!')
      break
  }
})

const gabarito1 = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']
const gabarito2 = ['D', 'B', 'C', 'C', 'D', 'A', 'B', 'C']
const gabarito3 = ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'A']
const gabarito4 = ['A', 'B', 'C', 'D', 'D', 'B', 'B', 'C']

let index = 0
let tentativas = 0
let pontuacao = 0

count.innerText = `${tentativas + 1} de 3`
pontos.innerText = pontuacao

if (index <= 8) {
  screen.innerText = index + 1
}

options.forEach(option => {
  option.addEventListener('click', event => {
    if (index >= gabarito.length) {
      alert('O quiz já terminou!')
      return
    }

    if (gabarito[index] === event.currentTarget.innerText) {
      console.log(`Acertou na tentativa ${tentativas + 1}!`)

      switch (tentativas) {
        case 0:
          pontuacao += 3
          break
        case 1:
          pontuacao += 2
          break
        case 2:
          pontuacao += 1
          break
      }
      pontos.innerText = pontuacao
      tentativas = 0
      index += 1
    } else {
      console.log(`Errou! tentativa: ${tentativas + 1}!`)
      tentativas += 1

      if (tentativas === 3) {
        tentativas = 0
        index += 1
      }
    }

    count.innerText = `${tentativas + 1} de 3`

    if (index < imagensGabarito.length) {
      imagem.src = imagensGabarito[index]
    }

    if (index < 8) {
      screen.innerText = index + 1
    }

    if (index >= gabarito.length) {
      alert(`Quiz finalizado!`)
    }

    console.log(`Pontuação: ${pontuacao}`)
  })
})

reset.addEventListener('click', () => {
  index = 0
  tentativas = 0
  pontuacao = 0
  count.innerText = `${tentativas + 1} de 3`
  pontos.innerText = pontuacao
  screen.innerText = 1
  alert('Quiz reiniciado!')
})
