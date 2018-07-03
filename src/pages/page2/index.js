import './index.css';

const path = require('path')
console.log('dirname', path.dirname())
console.log('bubuub')

function component() {
  let element = document.createElement('div');
  let content = 'path.dirname: ' + path.dirname()
  element.innerHTML = content
  return element
}

document.body.appendChild(component());