import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:grid-cols-4 md:text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accesibility</p>
        <p>This is not a real site</p>
        <p>It is a pretty awesome clone</p>
        <p>Referrals Accepted</p>
        <p>MDTRUNZO</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>MD TRUNZO</p>
        <p>Presents</p>
        <p>Zero to full</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Footer
