import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InstAdminComponent = (props) => {
    let updateUri = '/admin/institutions/' + props.title + "/update";
    let deleteUri = '/admin/institutions/delete/' + props.title;

    return <tr>
            <td><Link className="btn btn-warning mx-1" to={updateUri}>Update</Link>
            
            <button className='btn btn-danger mx-1' onClick={props.onClickDelete}>Delete</button></td>
       
            <td>{props.title}</td>
            <td>{props.type}</td>
            <td>{props.category}</td>
            <td>{props.image}</td>
            
        </tr>
    

}

export default InstAdminComponent;