import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InstCreateComponent from './InstCreateComponent';
class InstCreateContainer extends React.Component {

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

        axios.post("http://localhost:8081/library/api/institutions/new/", this.state)
        .then(response =>{
            this.props.history.push('/admin/institutions');
            alert("Added institution " + this.state.title + " to repository")
        })
        .catch(err => {
            alert("Information is not correct" + err);
        });
        

    }
    render() {
    return <InstCreateComponent 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                onSubmit={() => this.onSubmit}
    
                    />
    
    
//     <form className="container" onSubmit={this.handleSubmit}>

//         <div className="form-group">
//             <label>Institution title</label>
//             <input 
//             name="title"
//             onChange={this.handleChange}
//             className="form-control"
//             placeholder="Enter institution title"/>
//         </div>
//         <div className="form-group">
//             <label>Image URL</label>
//             <input 
//             name="image"
//             onChange={this.handleChange}
//             className="form-control"
//             placeholder="Enter new image URL"/>
//         </div>
//         <div className="form-group">
//             <label>Institution type</label>
//             <input 
//             name="type"  
//             onChange={this.handleChange}
//             className="form-control"
//             placeholder="Enter institution type"/>
//         </div>
//         <div className="form-group">
//             <label>Institution category</label>
//             <input 
//             name="category"
//             onChange={this.handleChange}
//             className="form-control"
//             placeholder="Enter institution category"/>
//         </div>
//         <div className="form-group">
//             <label>City of institution</label>
//             <input 
//             name="city"
//             onChange={this.handleChange}
//             className="form-control"
//             placeholder="Enter institution category"/>
//         </div>
        
//         <button  onSubmit={() => this.onSubmit} type="submit" className="btn btn-success mx-1">
//         Save</button>
//         <Link className="btn btn-primary mx-1" to='/admin/institutions/'>Back</Link>
        
// </form>

    }
}

export default InstCreateContainer;