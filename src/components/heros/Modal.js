import React from 'react';

let Modal = ({card}) =>
  <div className="modalWindow">
    <div className="modalWrap">
      <label for="modal" className="cross"></label>
      <div className="content">
        <span>Modal Content</span><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        veniam quas dicta quia blanditiis quaerat ex aliquam soluta iste mollitia
        corporis ipsa, numquam odio sit tenetur eius, beatae voluptates natus.
      </div>
    </div>
  </div>

export default Modal;
