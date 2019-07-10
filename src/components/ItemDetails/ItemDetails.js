import React, { Component } from 'react';

import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';

import './ItemDetails.css';

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
         <span className="term">{label}</span>
         <span>{item[field]}</span>
      </li>
    )
};

export {
  Record //Теперь мы моежем импортировать Record в App js
 }

const ItemDetails = (props) => {
   const {item, image, children: renderLabel} = props;
   const { name } = item;
   return (
    <ErrorBoundry>
       <div className="item-details card">
         <img className="item-image"
           src={image}
           alt="item-details"/>
          <div className="card-body">
           <h4>{name}</h4>
           <ul className="list-group list-group-flush">
             {
               React.Children.map(renderLabel, (child) => { // получаем доступ к объекту, React.Children.map - позволяет нам не надо задумоваться какого типа child нам попался
                 return React.cloneElement(child, { item }); // Принимает несколько аргументов, первый это тот, который нужно скопировать, второй добавляет свойтство в дополнение к тем который там уже определенны field & label в
               })
             }
           </ul>
           <ErrorButton />
         </div>
       </div>
     </ErrorBoundry>
   );
}

export default ItemDetails;