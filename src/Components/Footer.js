import React from 'react'

export default function Footer(props){
    return (
        <div>
            <p className="footerpara">
                <p class="footerpara1" style={{color:props.color==='bl'?'white':'black'}}>Made by Deepanshu Bansal- with the help of CodeWithHarry</p>
            </p>
        </div>
    )
}