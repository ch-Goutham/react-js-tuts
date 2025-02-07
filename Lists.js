import React from 'react'

const Lists = () => {
    const fruits=['apple', 'banana', 'cherry', 'date']
  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index)=>(
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default Lists
