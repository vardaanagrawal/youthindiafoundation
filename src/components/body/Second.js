import React from 'react'

export default function Second({title}) {
  return (
    <div className='second' style={{fontSize: '42px',fontWeight: '500',textAlign: 'center',paddingTop: '100px'}}>welcome to <span style={{color: '#FF6600'}}>{title}</span> Page</div>
  )
}
