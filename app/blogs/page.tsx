import React from 'react'

const page = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <p>blogs</p>
        {children}
    </div>
  )
}

export default page