import React from 'react';
import { Link } from 'react-router-dom';


const InstCreateComponent = (props) => {


    return ( 
    <form className="container" onSubmit={props.handleSubmit}>

    <div className="form-group">
        <label>Institution title</label>
        <input 
        name="title"
        onChange={props.handleChange}
        className="form-control"
        placeholder="Enter institution title"/>
    </div>
    <div className="form-group">
        <label>Image URL</label>
        <input 
        name="image"
        onChange={props.handleChange}
        className="form-control"
        placeholder="Enter new image URL"/>
    </div>
    <div className="form-group">
        <label>Institution type</label>
        <input 
        name="type"  
        onChange={props.handleChange}
        className="form-control"
        placeholder="Enter institution type"/>
    </div>
    
    <div className="form-group">
        <label>Institution category</label>
        <select class="custom-select" id="inputGroupSelect01"  name="category"   
        onChange={props.handleChange}>
            <option selected>Choose...</option>
            <option value="National">National</option>
            <option value="Private">Private</option>
        </select>

    </div>
    <div className="form-group">
        <label>City of institution</label>
        <input 
        name="city"
        onChange={props.handleChange}
        className="form-control"
        placeholder="Enter city of institution"/>
    </div>
    
    <button  onSubmit={props.onSubmit} type="submit" className="btn btn-success mx-1">
    Save</button>
    <Link className="btn btn-primary mx-1" to='/admin/institutions/'>Back</Link>
    
</form>)
}

export default InstCreateComponent;