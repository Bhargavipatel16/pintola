import React from 'react'
import './Nav.css'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Contactus = () => {
  return (
    <div>
      <div className='ci'>
        <img src='https://pintola.in/cdn/shop/files/Contact_us_1400x.png?v=1691834837' />

      </div>
      <br></br>
      <div className='cu'>

        <div className='sh'>
          <h1>SAY HELLO!</h1>
          <br></br>
          <h6>Company -<p>Das Foodtech Pvt Ltd</p></h6>
          <h6>Email -<p>support@pintola.in</p></h6>
          <h6>Phone -<p>91 78080 58080</p></h6>
          <h6>Corporate Office -<p>304-305 Ganesh Glory,Jagatpur,
            SG Highway Ahmedabad-383210</p></h6>
          <h6>Manufacturing Unit -<p>Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist,
            Himatnagar, Gujarat 383210</p></h6>
          <h6>Working Days -<p>Monday to Saturday</p></h6>
          <h6>Timing -<p>9am to 6pm</p></h6>

          <div className='cui'>
            <h6>Follow Us</h6>
            <br></br>
            <i><FaTwitter /></i>
            <i><FaFacebookF /></i>
            <i> <FaYoutube /></i>
            <i><FaInstagram /></i>
            <i> <FaLinkedinIn /></i>

          </div>
        </div>

        <div className='form'>
          <div className='fcon'>
            <p>We'd love to hear from you! Fill out our contact form to get in touch with our team.</p>
            <select >
              <option value="What can we help with? *">What can we help with? *</option>
              <option value="For Dealership Inquiries">For Dealership Inquiries</option>
              <option value="For Export Inquiries">For Export Inquiries</option>
              <option value="Feedback">Feedback</option>
            </select>
            <br></br>
            <input type='text' placeholder='Name*' required /><br></br>
            <input type='email' placeholder='Email*' required /><br></br>
            <input type='text' placeholder='Phone Number*' required /><br></br>
            <input type='text' placeholder='Area/City*' required /><br></br>
            <input type='text' placeholder='Country(for export)' /><br></br>
            <textarea placeholder='Message*' required></textarea><br></br>
            <button>Submit</button>

          </div>
        </div>

      </div>
      <br></br>
      <br></br>
      <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14637.008674032642!2d72.915241!3d23.487425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1720082800695!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br></br>
      <br></br>
      <br></br>
      <div className='ai2'>
        <img src='https://pintola.in/cdn/shop/files/Asset_7_150x-100_2000x.jpg?v=1678087744' />
      </div>
    </div>
  )
}

export default Contactus
