import React from 'react'

const Button = ({children,onClick}) => {
  return (
    <div  onClick={onClick} >
     {children}
    </div>
  )
}

export default Button