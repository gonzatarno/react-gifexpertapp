import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel']);
    
    // const handleAdd = () => {
    //     setCategories( [...categories, 'Iron Man'] )
    // }
    
    return (
        <>
            <h2 className="animate__animated animate__fadeIn">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map(category =>
                    <GifGrid 
                    key= { category }
                    category={ category }
                    />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp
