import React from 'react';
export default function CustomInputComponent({text,type,title}){
    return(
        <div className='row'>
            <h2 className='mb-2'>{title}</h2>
            <input className="form-control mt-5 ms-2 "placeholder={text} type={type} required/>
        </div>
        
    )
}