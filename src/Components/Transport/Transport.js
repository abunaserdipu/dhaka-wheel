import React from "react";
import { useHistory } from "react-router";

const Transport = (props) => {
  const { name, photo, transportId } = props.transport;
  const history = useHistory();
  const handleTransport = (transportId) => {
    history.push(`destination/${transportId}`);
  };
  return (
    <div className="col-md-3">
      <div className="card" onClick={() => handleTransport(transportId)}>
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Transport;
