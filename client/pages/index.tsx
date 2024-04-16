import React, { useEffect, useState } from 'react'

function index() {
  
  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  }, [])
  
  return (
    <div>index</div>
  )
}

export default index