import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Brand from '../../menhomethree/Brand'
import First from '../Menprojectdeatils/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom  title="Home" 
         subtitle="Projects Details"/>
         <First/>
         <Brand/>
        
    </>
  )
}

export default Main