import React from 'react'
import './index.css'

export default function ImageContainer({src, alt}){
    return (
        <div className="imgcontainer">
            <img src={src} alt={alt}/>
        </div>
    )
}