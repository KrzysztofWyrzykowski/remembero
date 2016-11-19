import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => (
  <footer className="footer">
    <div className="layout__wrapper">
      <ul className="list list--inline pull-left">
        <li className="list__item">
          Visit my websites:
        </li>
        <li className="list__item">
          <a href="http://kryz.me" title="Krzysztof Wyrzykowski Portfolio" className="footer__link footer__link--with-separator" target="_blank">Kryz.me</a>
        </li>
        <li className="list__item">
          <a href="http://primemodule.com" title="PrimeModule" className="footer__link" target="_blank">PrimeModule</a>
        </li>
      </ul>

      <ul className="list list--inline pull-right">
        <li className="list__item">
          <a href="https://www.facebook.com/krzysztof.wyrzykowski.79" title="Krzysztof Wyrzykowski Facebook" className="footer__link h5" target="_blank">
            <FontAwesome name="facebook" />
          </a>
        </li>
        <li className="list__item">
          <a href="https://twitter.com/kwyrzykowski" title="Krzysztof Wyrzykowski Twitter" className="footer__link h5" target="_blank">
            <FontAwesome name="twitter" />
          </a>
        </li>
        <li className="list__item">
          <a href="https://www.linkedin.com/in/krzysztof-wyrzykowski-12257169" title="Krzysztof Wyrzykowski Linkedin" className="footer__link h5" target="_blank">
            <FontAwesome name="linkedin" />
          </a>
        </li>
        <li className="list__item">
          <a href="https://github.com/KrzysztofWyrzykowski" title="Krzysztof Wyrzykowski Github" className="footer__link h5" target="_blank">
            <FontAwesome name="github" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
