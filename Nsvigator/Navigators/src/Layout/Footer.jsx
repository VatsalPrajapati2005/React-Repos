import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p> vatsalprajapati07@gmail.com</p>
          <div className="social-icons my-3">
            <a href="" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p>Designed with <span style={{ color: 'red' }}>❤</span> by Your Vatsal Prajapati</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
