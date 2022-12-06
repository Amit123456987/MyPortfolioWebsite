import React from 'react'
import { Card } from './Card'

export const Projects = () => {
  return (
    <div className="mx-auto" style={{  display: "flex", flexWrap: "wrap" , justifyContent : 'center' }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
