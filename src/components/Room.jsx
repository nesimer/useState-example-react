import React, { useState } from 'react';

const Room = () => {
  const [isLit, setIsLit] = useState(true);

  return (
    <div className="room">
      La chambre est {isLit ? 'disponible' : 'occupée'}
    </div>
  );
};

export default Room;
