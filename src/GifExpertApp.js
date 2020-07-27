import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['the legend of zelda']);

    return ( 
        <>
            <h2>GifExpertApp</h2>
                <AddCategory setcategories={ setcategories } />
            <hr/>
            
            <ol>
                { 
                    categories.map( (category, i) => (
                        <GifGrid 
                            key={category}
                            category={category} />
                    )) 
                }
            </ol>
        </>
    );
}
 
export default GifExpertApp;