import React from 'react';
import imgmeme from'../image/meme.jpeg';
export default function Header(){
    return(
        <header className='header'>
            <img src={imgmeme} alt="" height={65} width={80} className="header-image" />
            <h1 className='header-title'>Meme Generator</h1>
            <h4 className='header-project'>React Course-Project3</h4>
        </header>
    )
}