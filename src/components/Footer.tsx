import React, { useEffect, useState } from "react";
import config from "../../config";
import { useForm } from "react-hook-form";
import { useSendEmail } from "../api";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

interface IFooter {
  message?: string;
}

const Footer = (props: IFooter) => {
  const { message: messageProp } = props;

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [sendEmail, { res, loading, error }] = useSendEmail();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (messageProp) {
      setMessage(messageProp);
    }
  }, [messageProp]);

  const onSubmit = handleSubmit((values: Inputs) => {
    console.log("values: ", values);
    const message = `
      Nuevo mensaje:\n\n

      Nombre: ${values.name}\n
      Email: ${values.email}\n
      Mensaje: ${values.message}
    `;

    sendEmail(message);
  });

  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Hablemos</h2>
        <p>Envíanos un mensaje y te contáctaremos lo más pronto posible</p>
        <form onSubmit={onSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input
                ref={register({ required: true })}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                ref={register({ required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                ref={register({ required: true })}
                name="message"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <span>¿Qué nos quieres preguntar?</span>}
            </div>
          </div>
          <ul className="actions">
            <li>
              <button type="submit" disabled={loading}>
                {res
                  ? loading
                    ? "Enviando mensaje..."
                    : "¡Mensaje enviado!"
                  : loading
                  ? "Enviando mensaje..."
                  : "Enviar mensaje"}
              </button>
              {error && <span>Error al enviar el mensaje</span>}
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
};

export default Footer;
