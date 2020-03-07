import React, { useState } from 'react';
import './Room.css'

const Room = () => {
  const [isLit, setIsLit] = useState(true);

  return (
    <div className="room">
      <div id="status" className={isLit ? 'lit' : 'free'}></div>
      <span>La chambre est {isLit ? 'disponible' : 'occupée'}</span>
      <button onClick={() => setIsLit(prev => !prev)}>
        Changer l'état
      </button>
    </div>
  );
};

export default Room;
