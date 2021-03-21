import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import transports from "../../fakeData/fakeData";
// import map from "../../images/Map.png";
import Header from "../Header/Header";

const Destination = () => {
  const [search, setSearch] = useState(true);
  const { transportId } = useParams();
  const transportDetails = transports.find(
    (transport) => transport.transportId == transportId
  );
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-2">
            {search ? (
              <div
                className="card p-2"
                style={{ backgroundColor: "lightGray" }}
              >
                <small>Pick From</small>
                <input type="text" className="form-control" name="from" />
                <small>Pick To</small>
                <input type="text" className="form-control" name="" />
                <small>Select Date</small>
                <input type="date" className="form-control" name="" id="" />
                <div className="d-grid mt-2">
                  <button
                    onClick={() => setSearch(!search)}
                    className="btn btn-info"
                  >
                    Search
                  </button>
                </div>
              </div>
            ) : (
              <div className="card" style={{ backgroundColor: "lightGray" }}>
                <div className="card-body">
                  <div
                    className="card"
                    style={{ backgroundColor: "skyBlue", textAlign: "center" }}
                  >
                    <p>Mirpur</p>
                    <p>To</p>
                    <p>Dhanmondi</p>
                  </div>
                  <div className="card my-3">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          style={{ width: "70%" }}
                          src={transportDetails.photo}
                          alt=""
                        />
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.name}</h6>
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.cost}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          style={{ width: "70%" }}
                          src={transportDetails.photo}
                          alt=""
                        />
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.name}</h6>
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.cost}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          style={{ width: "70%" }}
                          src={transportDetails.photo}
                          alt=""
                        />
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.name}</h6>
                      </div>
                      <div className="col-md-4">
                        <h6>{transportDetails.cost}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d116834.13669278496!2d90.4193257!3d23.7806365!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1616287313232!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
