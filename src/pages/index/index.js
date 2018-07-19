import './index.css';

// For HRM
// if(module.hot)
//   module.hot.accept();

function component() {
    let element = document.createElement('div');
    element.innerHTML = 'hello webpack111'
    return element
}

document.body.appendChild(component());
