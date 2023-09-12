import React from 'react'

function LandingPageCard() {
  return (
    <div className='p-2 mx-4 border rounded-2 ' style={{width:"270px",background:"#fff"}}>
      <img className='rounded-2' src='https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=' style={{width:"100%"}}/>
      <p className='fw-semibold  text-center py-1'>Apartment London</p>
      <p className='text-center' style={{color:"#A5A5A5",lineHeight:"0"}}>2 & 3 BHK Apartments</p>
    </div>
  )
}

export default LandingPageCard