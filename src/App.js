import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      ></Dropdown>
    </div>
  );
};
