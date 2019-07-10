import React from 'react';

const {
  Provider : SwapiServiceProvider, // просто переименовпли, чтобы лучше понимать суть
  Consumer : SwapiServiceConsumer
} = React.createContext(); // может принимать опциональный агрумент - значение по учмолчанию.

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
};