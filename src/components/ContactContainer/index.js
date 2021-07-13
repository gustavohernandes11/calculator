import React from 'react'
import './index.css'

export default function ContactContainer({ ...props }) {
    return (
        
            <div className="contactbox">
                <div className="contacticon">{props.icon}</div>
                <div className="contactcontent">{props.content}</div>
            </div>
        
    )

}

