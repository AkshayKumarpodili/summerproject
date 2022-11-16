import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
           {/* column-1 */}
          <div className='col'> 
           <h4>HEAD OFFICE</h4>
           <ul className='list-unstyled'>
              <li>Vignana Jyothi</li>
              <li>H.No.7-1-4, Begumpet</li>
              <li>Hyderabad-500 016</li>
              <li>Phone : 040-23712357</li>
           </ul>
          </div>
           {/* column-2 */}
          <div className='col'> 
           <h4>CONTACT</h4>
           <ul className='list-unstyled'>
              <li>Vignana Jyothi Nagar,Pragathi Nagar</li>
              <li>Nizampet(S.O),Hyderabad 500 090TS,India.</li>
              <li>Email:postbox@vnrvjiet.ac.in,</li>
              <li>Website:www.vnrvjiet.ac.in</li>
           </ul>
          </div> 
           {/* column-3 */}
          <div className='col'> 
           <h4>FOLLOW US</h4>
           <ul className='list-unstyled'>
              <li><a href='https://www.facebook.com/profile.php?id=100064949286608' target="_blank">Facebook</a></li>
              <li><a href='https://www.instagram.com/vnrvjietofficial2019/' target="_blank">INSTAGRAM</a></li>
              <li><a href='https://twitter.com/VnrvjietO' target="_blank">TWITTER</a></li>
           </ul>
          </div>
        </div>
        <hr/>
        <div className='row'>
          <p className='col-sm'>
             &copy;{new Date().getFullYear()} VNRVJIET | All right reserved | Terms Of Service | Privacy 
          </p>

        </div>
      </div>
    </div>
  )
}

export default Footer