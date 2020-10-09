import React, { useState } from "react";
import Modal from "../Modal";

interface ICard {
  imgSrc: string;
  title: string;
  description: string;
}

const Card = (props: ICard) => {
  const { imgSrc, title, description } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Modal show={showModal}>
        <div
          style={{ height: "50vh", width: "50vw", backgroundColor: "white" }}
        >
          ayee
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      </Modal>

      <article>
        <div className="image" onClick={() => setShowModal(true)}>
          <img src={imgSrc} alt="" />
        </div>
        <h3 className="major">{title}</h3>
        <p>{description}</p>
        <button className="special">Learn more</button>
      </article>
    </>
  );
};

export default Card;
