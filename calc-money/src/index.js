import React from 'react'; //импортируем react
import ReactDOM from 'react-dom';


//Функция которая будет возвращать нам компонент
/* function Test() {
  return React.createElement('button', null, 'Привет мир!'); //С помощью реакта создаем элемент
} */
//Тоже только стрелочная функция
//const Test = () => React.createElement('button', null, 'Привет мир!');

//Тоже самое на чистом jsx
/* function Test2() {
  return <button>Привет мир</button>;
} */
//Тоже только стрелочная функция
//const Test2 = () => <button>Привет мир</button>;


/* ReactDOM.render(
  <React.StrictMode>
    <Test /> //Передаем компонент из функции test
    <Test2 />
  </React.StrictMode>,
  document.getElementById('root')
); */

/* const functionComponents = (props) => <h1 id="hi">{props.text}</h1>;
const Element = React.createElement('p', null, 'параграф'); */

/* class Main extends React.Component {
  render() {
    return React.createElement('div', { className: 'main' }
    React.createElement(functionComponents, { text: 'свойство текст' }), Element)
  }
} */

const Header = ({ text }) => <h1 id="hi">{text}</h1>; //функциональный компонент

const Element = <p>Параграф</p>

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header text={'свойство текст'} />
        {Element}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


