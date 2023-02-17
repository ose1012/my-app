import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Seoung eun</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.instagram.com/oh_1012_/" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://twitter.com/HAE_S00_" className="footer__social-link" target="_blank">
                <i class="bx bxl-twitter"></i>
            </a>
            <a href="https://github.com/ose1012" className="footer__social-link" target="_blank">
                <i class="bx bxl-github"></i>
            </a>
            </div>

            <span className="footer__copy">
                &#169; Crypticalcoder. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer