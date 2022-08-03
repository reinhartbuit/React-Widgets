import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JS FE Framework',
  },
  {
    title: 'Why React?',
    content: 'React is cool',
  },
  {
    title: 'How do you use react?',
    content: 'You use components',
  },
];

export default () => {
  return (
    <div className="ui container">
      <Search></Search>
    </div>
  );
};
