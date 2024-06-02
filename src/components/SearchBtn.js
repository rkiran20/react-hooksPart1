import React, { useState } from 'react'

const SearchBtn = ({id}) => {
    const [click,setClick]  =useState(false);
    const [text,setText]=useState('');
    const newId = React.useId();
    const formId = id || newId ;
    const handleBtn= (data)=>{
        data.preventDefault();
        setClick(!click);
    }
  return (
    <div>
        <form className='searchFormDiv'>
            {click && <input type='text' id={formId} value={text} onChange={(event)=>{setText(event.target.value)}}></input>}
            <label htmlFor={formId}> <button className='searchBtn' onClick={(event)=>(handleBtn(event))}>🔍</button></label>
        </form>
    </div>
  )
}

export default SearchBtn