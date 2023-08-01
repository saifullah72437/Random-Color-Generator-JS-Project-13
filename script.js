let generateColor = document.querySelector('#generateColorButton');
let main = document.querySelector('.main')
let box = document.querySelector('.box')
let colorCode = document.querySelector('#colorCode')


function generateHexColor(){
  const red = Math.floor(Math.random() * 256); 
  const green = Math.floor(Math.random() * 256); 
  const blue = Math.floor(Math.random() * 256); 


  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
}


generateColor.addEventListener('click', function(){
main.style.backgroundColor = generateHexColor()
colorCode.innerHTML = generateHexColor()
}, false)

colorCode.addEventListener('click', function(){
    copyToClipboard(colorCode.innerHTML)
}, false)


function copyToClipboard() {
    const textToCopy = colorCode.innerHTML;
  
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
  
    tempInput.select();
    document.execCommand('copy');
  
    document.body.removeChild(tempInput);
  
    alert('Text has been copied to the clipboard: ' + textToCopy);
  }
  