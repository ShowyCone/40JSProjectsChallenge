const input = document.getElementById('input')
const output = document.getElementById('output')
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const result = document.getElementById('result')
const copyToClipboard = document.getElementById('copy-to-clipboard')

input.addEventListener('change', function () {
  let file = input.files[0]
  let reader = new FileReader()
  reader.onload = function () {
    output.src = reader.result
  }
  reader.readAsDataURL(file)
})

output.addEventListener('load', () => {
  readQR(output.width, output.height)
})


function readQR(w, h) {
  canvas.width = w
  canvas.height = h

  context.drawImage(output, 0, 0)

  let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  let code = jsQR(imageData.data, imageData.width, imageData.height)

  if (code) {
    result.textContent = 'Datos del código QR: ' + code.data
  } else {
    result.textContent = 'No se encontró ningún código QR'
  }

  result.addEventListener('click', () => {
    if(code.data) {
      navigator.clipboard.writeText(code.data)
      copyToClipboard.style = 'top: 10px'
      setTimeout(() => copyToClipboard.style = 'top: -100px', 3000)
    }
  })
}

