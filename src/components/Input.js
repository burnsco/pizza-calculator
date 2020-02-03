import React from 'react'

const Input = ({ label, value, handleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={e => handleChange(e)} type="number" value={value} />
    </div>
  )
}

export default Input
