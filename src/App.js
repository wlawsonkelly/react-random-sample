import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import { green } from 'color-name';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "Crash",
        content: "Luda!"
    },
    {
        title: "Boogie Nights",
        content: "Marky Mark"
    },
    {
        title: "There Will Be Blood",
        content: 'Daniel Deezy'
    }
];

const options =[
    {
       label: "The color red" ,
        value: "red"
    },
    {
        label: "The color green",
        value: green
    },
    {
        label: "The color blue",
        value: "blue"
    }
];

export default () => {
const [selected, setSelected] = useState(options[0]);

return (
        <div>        
            <Header />
            <Route path = "/">
                <Accordion items={items} />
            </Route>
            <Route path = "/list">
                <Search />
            </Route>
            <Route path = "/dropdown">
                <Dropdown
                label = "Select a Color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path = "/translate">
                <Translate />
            </Route>
        </div>    
);
   
};