import React from "react";
import config from "../../config";

const Footer = () => (
  <section id="footer">
    <div className="inner">
      <h2 className="major">Hablemos</h2>
      <p>Envíanos un mensaje y te contáctaremos lo más pronto posible</p>
      <form method="post" action="/#">
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" rows={4} />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Enviar mensaje" />
          </li>
        </ul>
      </form>
      <ul className="contact">
        <li className="fa-home">{config.address}</li>

        <li className="fa-phone">{config.phone}</li>

        {config.socialLinks.map((social) => {
          const { icon, url } = social;
          return (
            <li className={`${icon}`} key={url}>
              <a href={url}>{url}</a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; ALP360 Group. All rights reserved.</li>
      </ul>
    </div>
  </section>
);

export default Footer;
