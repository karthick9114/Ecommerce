import React from 'react'

const Body = (props) => {
  return (
    <>
      <h1>Body Component</h1>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
    </>
  )
}

export default Body
