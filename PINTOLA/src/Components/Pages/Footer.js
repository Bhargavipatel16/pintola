import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <hr className='hl2'/>
      <br></br>
      <div className="footer">
        <div className="f1">
          <a href="https://pintola.in/">
            <img src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347" />
          </a>
          <br></br>

          <div className="ficon">
            <br></br>
            <p>Follow Us:</p>
            <i><FaTwitter /></i>
            <i><FaFacebookF /></i>
            <i> <FaYoutube /></i>
            <i><FaInstagram /></i>
            <i> <FaLinkedinIn /></i>
          </div>
        </div>

        <div className="f2">
          <h1>Shop</h1>
          <a href="https://pintola.in/collections/all">All Products</a>
          <a href="https://pintola.in/collections/peanut-butter">Peanut Butter</a>
          <a href="https://pintola.in/collections/breakfast-cereals">Breakfast Cereals</a>
          <a href="https://pintola.in/collections/premium-nut-butters">Premium Nut Butters</a>
          <a href="https://pintola.in/products/organic-wholegrain-brown-rice-cakes">Wholegrain Rice Cakes</a>
          <a href="https://pintola.in/collections/cooking-oils">Wood Pressed Oil</a>
        </div>


        <div className="f3">
          <h1>Pintola</h1>
          <a href="https://pintola.in/pages/about-us">About Us</a>
          <a href="https://pintola.in/blogs/all">Blogs</a>
          <a href="https://pintola.in/policies/privacy-policy">Privacy Policy</a>
          <a href="https://pintola.in/policies/terms-of-service">Terms of Service</a>
          <a href="https://pintola.in/pages/faq">FAQs</a>
          <a href="https://pintola.in/pages/refund">Refund & Cancellation Policy</a>
          <a href="https://pintola.in/pages/shipping-policy">Shipping Policy</a>
          <a href="https://www.pintola.in/apps/ils/return-request/">Return Order</a>
        </div>

        <div className="f4">
          <h1>Stay in the loop</h1>
          <input type="email" placeholder="Email*" /><br></br>
          <button type="submit">Sign Up</button>
        </div>

        <div className="f5">
          <h1>Download Product Catalogue</h1>
          <a href="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/New_Mix_Catlouge.pdf?v=1691572894">
            <button>Download</button></a>
        </div>
      </div>

      <div className="fl">
        <p> © 2024 <a href="//pintola.in/">Pintola</a>.</p>
      </div>
    </div>
  )
}

export default Footer
