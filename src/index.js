
import React from "react";  // только шаблонизатор
import ReactDOM from "react-dom";
import {renderedDive} from "enzyme/src/Utils";  // + рендер

// Создание и рендер react-элемента

// const name = `Кекс`;
// const element = <h1>Hello, {name}</h1>; // React-element
//
// ReactDOM.render(   // вызываем рендер React
//   element,           // кладываем туда элементы что нужно прорендерить
//   document.getElementByID(`root`)  // куда апендить (app) элемент
// );

// Вставка в элемент значения функции

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Рыжий',
//   lastName: 'Кекс',
// };
//
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
//
// ReactDOM.render(
//   element,
//   document.getElementByID(`root`)
// );

// Создание и рендер компонента
//
// const App = (props) => {           // App - react-компонент, props - пропс
//   return <div>
//     <p>Hello, {props.name}</p>
//   </div>
// }
//
// ReactDOM.render(
//   <App
//   name={`Кекс`}  // атрибут name, значение name - строка `Кекс`
//   />,
//   document.getElementByID(`root`)
// );
//
// /*
// Пропс - это объект, атрибуты которого мы передали внутрь компонента
// Пропс - это объект-аргумент комппонента
//  */

// const App = (props) => { // компонент в зависимости от условии
//       if (props.name) {  // рендерит одну из двух разметок-элементов
//         return <div>
//         <p>Hello, {props.name}</p>
//         </div>;
//       }
//       return <div>
//         <p>Hello, Stranger.</p>
//       </div>
// };
//
// ReactDOM.render(
//   <App
//     name={`Кекс`}                       // атрибут name, значение name - строка `Кекс`
//     // name={}                          // значения атрибута name нет - Hello, Stranger.
//   />,
//   document.getElementByID(`root`)
// );
//
// // Лучше использовать тернарный оператор - покрасивее и попонятнее лаконичнее
//
// const App = (props) => { // компонент в зависимости от условии рендерит одну из двух разметок-элементов
//   return <div>
//     <p>Hello, {props.name ? : props.name : `Stranger`}</p>
//   </div>;
// };
//
// ReactDOM.render(
//   <App
//     name={}
//   />,
//   document.getElementByID(`root`)
// );
//
// // А можно присвоить дефолтное значение атрибуту пропса
// // еще на этапе деструктаризации
//
// const App = (props) => {
//   const {name = 'Stranger'} = props;  // Деструктуризация пропса - разбор его
//   // const {name} = props;            // на отдельные переменные
//   return <div>
//     <p>Hello, {name}.</p>
//   </div>
// };
//
// ReactDOM.render(
//   <App
//     name={'Кекс'}
//   />,
//   document.getElementByID(`root`)
// );

// Компонент, содержащий другие компоненты

// const Message = (props) => {              // Компонет Message
//   const {name = `Stranger`} = props;
//   return <div>
//     <p>Hello, {name}.</p>
//   </div>
// };
//
// const App = (props) => {    // у каждого компонента свой пропс. Пропсы App и Message
//   const {name} = props;    // это не один и тот же объект. Это разные объекты.
//                             // {name} - это значение поля пропса App
//   return <div>
//   <h1>React Application</h1>
//   <Message
//     name = {name}          // полю name пропса Message присвоили
//     />                       // значение поля name поля App
//     <Message
//     name = {'Vasya'}        // Это один и тот же компонент Message просто его вызвали во 2-ой раз
//     />                      // И на этот раз полю name его пропса присвоили дефолтное зн-е
// </div>                      // зн-е по умолчанию
// };
//
// ReactDOM.render(                    // вызываем рендер React
//   <App
//     name={'Кекс'}                   // значение поля name пропса App равно строке 'Кекс'
//   />,
//   document.getElementByID(`root`)
// );

/*
Компонент App содержит (рендерит) два компонента Message.
Чем удобны два и более к-та Message - разметкой. Присвоил все стили
и отступы message и айда писать различные значения одной и той же разметкой.
 */

// Иттерация по элементам массива, который является значением поля пропса
// c помощью map

// const Message = (props) => {              // Компонет Message
//   const {name = `Stranger`} = props;
//   return <div>
//     <p>Hello, {name}.</p>
//   </div>
// };
//
// const App = (props) => {
//   const {names} = props;
//   return <div>
//     <h1>React Application</h1>
//     {names.map((it) => <Message key={i} name={it} />)}
//   </div>
// };
//
// ReactDOM.render(                            // вызываем рендер React
//   <App
//     names={['Кекс', 'Vasya', 'Petya']}     // значение поля names пропса App -
//   />,                                       // массив строк
//   document.getElementByID(`root`)
// );
//
// /*
// Итерируясь по эл-там массива поля пропса App мы  поочередно присавиваем
// полю name пропса Message значение (эл-т массива) и возвращаем
// компонент Message.
//  */

// Можно вместо div рендеруемый компонент оборачивать в React.Fragment

// const Message = (props) => {              // Компонет Message
//   const {name = `Stranger`} = props;
//   return <div>
//     <p>Hello, {name}.</p>
//   </div>
// };
//
// const App = (props) => {
//   const {name} = props;
//   return <React.Fragment>      // Компонент App рендерит компонент
//     <Message                       // Message, обернутый в React.Fragment
//       name = {name}
//     />
//     <Message
//       name = {'Vasya'}
//     />
//   </React.Fragment>
// };
//
// ReactDOM.render(                    // вызываем рендер React
//   <App
//     name={'Кекс'}
//   />,
//   document.getElementByID(`root`)
// );
//
// /*
// И теперь все рендуриемое попадет в html-разметку без лишних оберток.
// Потому лучше использовать React.Fragment.
//  */



