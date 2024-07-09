export default function Footer() {
  return (
    <div className="main-container bg-dark-blue-1 flex flex-col items-center py-10">
      <div className="w-full sm:flex sm:justify-between lg:w-[1000px]">
        <div className="mb-10 lg:mb-0">
          <h6 className="text-purple-haze">Company</h6>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="mb-10 lg:mb-0">
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
      <p className="text-purple-haze mt-10">Copyright © 2024 Clarity. All rights reserved</p>
    </div>
  )
  }