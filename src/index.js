import './styles/index.scss';

const rootElement = document.getElementById('root');

const Header = () => {
    const header = document.createElement('header');
    header.className = 'main-header font-bold underline';
    header.innerText = 'Hello, Humans!'; 
    return header; 
}

rootElement.appendChild(Header());