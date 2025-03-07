const options = document.querySelectorAll('.options')
const reset = document.querySelector('.reset')
const count = document.querySelector('.count')
const pontos = document.querySelector('.pontuacao')
const screen = document.querySelector('.question')
const getInput = document.querySelector('.cod')
const btnIniciar = document.querySelector('.btn-submit')
const imagem = document.querySelector('.imagem')
const teclado = document.querySelectorAll('.teclado')

const gabarito1 = ['B', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B']
const gabarito2 = ['D', 'B', 'C', 'C', 'D', 'A', 'B', 'C']
const gabarito3 = ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'A']
const gabarito4 = ['A', 'B', 'C', 'D', 'D', 'B', 'B', 'C']

const images1 = [
  './assets/Question-01.png',
  './assets/Question-02.png',
  './assets/Question-03.png',
  './assets/Question-04.png',
  './assets/Question-05.png',
  './assets/Question-06.png',
  './assets/Question-07.png',
  './assets/Question-08.png',
  './assets/Question-09.png',
  './assets/Question-10.png',
  './assets/Question-11.png',
  './assets/Question-12.png',
  './assets/Question-13.png',
  './assets/Question-14.png',
  './assets/Question-15.png',
  './assets/Question-16.png',
  './assets/Question-17.png',
  './assets/Question-18.png',
  './assets/Question-19.png',
  './assets/Question-20.png',
  './assets/Question-21.png',
  './assets/Question-22.png',
  './assets/Question-23.png',
  './assets/Question-24.png',
  './assets/Question-25.png',
  './assets/Question-26.png',
  './assets/Question-27.png',
  './assets/Question-28.png',
  './assets/Question-29.png',
  './assets/Question-30.png'
]
const images2 = ['./assets/Question-31.png', './assets/Question-32.png', './assets/Question-33.png']
const images3 = ['./assets/Question-61.png', './assets/Question-62.png', './assets/Question-63.png']
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
      imagem.src = imagensGabarito[0]

      play_game.play()
      alert('Jogo iniciado!')
      break
    case '102':
      gabarito = gabarito2
      imagensGabarito = images2
      imagem.src = imagensGabarito[0]

      play_game.play()
      alert('Jogo iniciado!')
      break
    case '103':
      gabarito = gabarito3
      imagensGabarito = images3
      imagem.src = imagensGabarito[0]

      play_game.play()
      alert('Jogo iniciado!')
      break
    case '104':
      gabarito = gabarito4
      imagensGabarito = images4
      imagem.src = imagensGabarito[0]

      play_game.play()
      alert('Jogo iniciado!')
      break
  }
})



let index = 0
let tentativas = 0
let pontuacao = 0

count.innerText = `${tentativas + 1} de 3`
pontos.innerText = pontuacao

if (index <= 8) {
  screen.innerText = `-> ${index + 1}`
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
      error.play()

      if (tentativas === 3) {
        tentativas = 0
        error.play()

        index += 1
      }
    }

    console.log(index + 'index')

    count.innerText = `${tentativas + 1} de 3`

    imagem.src = imagensGabarito[0]

    if (index < imagensGabarito.length) {
      imagem.src = imagensGabarito[index]
    }

    if (index < 8) {
      screen.innerText = `-> ${index + 1}`
    }

    if (index >= gabarito.length) {
      alert(`Quiz finalizado!`)
    }

    console.log(`Pontuação: ${pontuacao}`)
  })
})

// teclado.forEach((elem) => {
//   elem.addEventListener('click', (e) => {
//     getInput.value = getInput.value + e.target.innerText
//     console.log(getInput.value)
//   })
// })

reset.addEventListener('click', () => {
  index = 0
  tentativas = 0
  pontuacao = 0
  count.innerText = `${tentativas + 1} de 3`
  pontos.innerText = pontuacao
  screen.innerText = 1
  imagem.src = ''
  alert('Quiz reiniciado!')
})
