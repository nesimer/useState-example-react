import React, { useState } from 'react';

const Room = () => {
  const [isLit, setIsLit] = useState(true);

  return (
    <div className="room">
      La chambre est {isLit ? 'disponible' : 'occupée'}

      <button onClick={() => setIsLit(prev => !prev)}>
        Changer l'état
      </button>
    </div>
  );
};

export default Room;
