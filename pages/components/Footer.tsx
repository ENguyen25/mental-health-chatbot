export default function Footer() {
  return (
    <div className="bg-dark-blue-1 flex flex-col items-center py-10">
      <div className="flex justify-between w-[700px]">
        <div>
          <h6 className="text-purple-haze">Company</h6>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="text-purple-haze">Offers</h6>
          <ul>
            <li>Buy a Gift</li>
            <li>Redeem a Gift</li>
            <li>Family Plan</li>
          </ul>
        </div>
        <div>
          <h6 className="text-purple-haze">Help</h6>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className="text-purple-haze mt-10">Copyright © 2024 Calm. All rights reserved</p>
    </div>
  )
  }