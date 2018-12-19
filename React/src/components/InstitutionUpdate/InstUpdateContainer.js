import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class InstUpdateContainer extends React.Component {
    constructor(){
        super();
        this.state = {    
            image: '',
            type: '',
            category: '',
            city: '',
            title: ''
        };
    }

    
    handleChange = (event) => {
        event.preventDefault();
            this.setState({[event.target.name]:event.target.value})
        
    
    } 
    handleSubmit = (event) => {
        event.preventDefault();
       this.setState({title: this.props.match.params.title})
         
        axios.put("http://localhost:8081/library/api/institutions/update/" 
        + this.props.match.params.title, this.state)
        .then(response =>{

        })
        .catch(err => {
            alert("Information is not correct");
        });
        

    }
    render() {
        return <form className="container" onSubmit={this.handleSubmit}>
        <p className="h3 text-center">{this.props.match.params.title}</p>
        <div className="form-group">
            <label>Image URL</label>
            <input 
            name="image"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter new image URL"/>
        </div>
        <div className="form-group">
            <label>Institution type</label>
            <input 
            name="type"  
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter institution type"/>
        </div>
        <div className="form-group">
            <label>Institution category</label>
            <input 
            name="category"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter institution category"/>
        </div>
        <div className="form-group">
            <label>City of institution</label>
            <input 
            name="city"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter city"/>
        </div>
        
        <button  onSubmit={() => this.onSubmit} type="submit" className="btn btn-warning mx-1">Update</button>
       <Link className="btn btn-primary mx-1" to='/admin/institutions/'>Back</Link>
        
</form>
    }
}

export default InstUpdateContainer;