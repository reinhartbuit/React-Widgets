import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
