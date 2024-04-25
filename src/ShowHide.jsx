import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow((prev) => !prev);
  }
  return (
    <>
      {!show && (
        <div onClick={handleShow}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quia
          quae voluptas aperiam adipisci culpa. Officiis minus asperiores eius
          saepe impedit fugit? Distinctio optio ipsa maiores consequuntur
          aspernatur ex accusamus pariatur. Recusandae quo dolorem alias
          exercitationem dolor corrupti, doloremque nulla deserunt optio
          distinctio perspiciatis, eaque facere. Excepturi voluptates officia
          qui quaerat quo, sit quod modi ut quis, illum voluptas et incidunt
          libero. Animi mollitia, debitis repellat excepturi aut dolore! Laborum
          recusandae illo impedit iusto autem. Autem fugit minima quia
          exercitationem ducimus iste dolores vero debitis harum, maxime
          explicabo id numquam tempora aperiam alias libero asperiores fuga
          accusantium dolorem nesciunt excepturi.
        </div>
      )}
      <button onClick={handleShow}>{show ? "show" : "hide"}</button>
    </>
  );
};

export default ShowHide;
