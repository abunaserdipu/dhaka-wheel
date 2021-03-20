import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import map from '../../images/Map.png'
import Header from '../Header/Header';

const Destination = () => {
    const [search, setSearch] = useState(false)
    const {transportId} = useParams()
    const handleSearch = () => {

    }
    return (
        <div>
        <Header />
        <hr/>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                        <div className=" input-group input-group-lg">
                    <div className="card" style={{backgroundColor: 'lightGray', textAlign: 'center'}}>
                        <form onSubmit="" className="m-2">
                        <small>Pick From</small>
                        <input type="text" className="form-control" name="from"/>
                        <small>Pick To</small>
                        <input type="text" className="form-control" name=""/>
                        <div className="d-grid mt-2">
                        <button onClick={() => setSearch()} className="btn btn-info">Search</button>
                        </div>
                        
                    </form>
                        </div>
                    
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={map} alt=""/>
                </div>
            </div>
            <h1>This is {transportId} destination</h1>
            <p>Want a <Link to="/home"> different transport?</Link></p>
        </div>
        </div>
    );
};

export default Destination;