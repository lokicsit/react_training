import React from 'react'
import Banner from '../components/UI/banner'

const Home = () => {
  return (
    <>
    
    <div>
      <Banner title="home" subtitle="it's a home" description="it's description"/>
    <button onClick={()=>{
      alert(200)
    }}>
      About us 
      </button>

  
</div>
      </>
  )
}

export default Home
