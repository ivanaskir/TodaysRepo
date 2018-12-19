import React from 'react';
import { Link } from 'react-router-dom';
const InstitutionDetailsComponent = (props) => {
    let bookUri = '/';
    
    return <div className="col-sm-6 col-md-4 text-center ">
                <div className="thumbnail">
                <img src="" alt="..." className="w-100"/>
                    <div className="caption ">
                        <h3 className="">{props.title}</h3>
                        <p className="">Quantity: {props.quantity}</p>
                        <p className="">Quality: {props.quality}</p>
                        {props.price===0 ? null : <p className="">Price: {props.price}</p>}
                        <Link to={bookUri} className="btn btn-primary" role="button">Buy</Link> 
                      
                       
                    </div>
                </div>
            </div>
         
}

export default InstitutionDetailsComponent;