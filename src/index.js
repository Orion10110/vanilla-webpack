import './styles.css'

console.log('run');
const doc = new DOMParser().parseFromString(`<div class='colr'>Hi<div>`, 'text/html');
document.body.append(doc.body.firstChild)