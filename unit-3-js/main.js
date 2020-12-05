const changeText = () => {
  document.getElementsByTagName('h1')[0].outerHTML = "<h2 id='color'>HELLO</h2>"
  document.getElementById('color').style.color = 'red'
}

const sumElement = (arr = []) => { // open console screen -> arr
  let sum = 0
  arr.forEach(element => {
    sum += element
  });
  console.log(sum)
}
