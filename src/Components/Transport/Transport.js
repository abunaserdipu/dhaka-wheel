import React from "react";
import { useHistory } from "react-router";

const Transport = (props) => {
  const { name, photo, transportId } = props.transport;
  const history = useHistory();
  const handleTransport = (transportId) => {
    history.push(`destination/${transportId}`);
  };
  return (
    
      <div className="col-md-3 py-5">
      <div className="card bg-success" style={{height:"13rem", hover:"shadow", cursor:"pointer"}} onClick={() => handleTransport(transportId)}>
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h3 className="card-text text-white">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Transport;
