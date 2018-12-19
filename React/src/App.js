import React, { Component } from 'react';
// import './App.css';

import axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      deleteUsername: "", 
      users: []
    }
  }


  render() {
    return <div>

    </div>
  }
}
//   componentDidMount() {
//     axios.get("http://localhost:8081/api/users/all")    
//    .then(res=>{
//        console.log(res);
//        console.log(res.data);
//       this.setState({user: res.data})
//    })
//    .catch(error =>{
//      console.log(error);
//    });
// };
//   changeHandler(event){
//     event.preventDefault();
//     this.setState({[event.target.name]:event.target.value})
//   }
//   getHandler(event){
//     event.preventDefault();
//     console.log("getHandler");
//       // adress from java files
//    axios.get("http://localhost:8081/api/users/all")    
//    .then(res=>{
//        console.log(res);
//        console.log(res.data);
//       this.setState({users: res.data})
//    })
//    .catch(error =>{
//      console.log(error);
//    });
//  }
//  deleteHandler(event){
//   event.preventDefault();

//   console.log("deleteHandler");
//     // adress from java files
//  axios.delete("http://localhost:8081/api/users/delete/" + this.state.deleteUsername )    
//  .then(res=>{
//      console.log(res);
//      console.log(res.data);
//  })
//  .catch(error =>{
//    console.log(error);
//  });
// }
//   pushHandler(event){
//     event.preventDefault();

//     console.log("Ab");
//     // var body ={
//     //   username: "slapyvardis",
//     //   email : "userName@mail.com",
//     //   firstName: "Vardenis",
//     //   lastName : "Pavardenis"};
//      axios.post("http://localhost:8081/api/users/post", this.state)
//       .then(res => {
//         console.log(res.data)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     }
    
//   render() {
//     let users = this.state.users.map((user, index) => {
      
//       return <div>
//         <p>{user.username}</p>
//         <p>{user.email}</p>
//         <p>{user.firstName}</p>
//         <p>{user.lastName}</p>
//         <br></br>
//       </div>
//     });
//     return (
//       <div>
//         <form>
//         <input  name="username"
//                 onChange = {this.changeHandler.bind(this)} 
//                 // value={this.state.username}
//                 className="form-control"
//                 placeholder="Enter username."/>
//         <input  name="email"
//                 onChange = {this.changeHandler.bind(this)} 
//                 // value={this.state.email}
//                 className="form-control"
//                 placeholder="Enter email."/>
//         <input  name="firstName"
//                 onChange = {this.changeHandler.bind(this)} 
//                 // value={this.state.firstName}
//                 className="form-control"
//                 placeholder="Enter first name."/>
//         <input  name="lastName"
//                 onChange = {this.changeHandler.bind(this)} 
//                 // value={this.state.firstName}
//                 className="form-control"
//                 placeholder="Enter last name."/>

//         <button className="btn btn-warning" onClick={this.pushHandler.bind(this)}>Push one user</button>

//         </form>

//         <button className="btn btn-success" onClick={this.getHandler.bind(this)}>Get users</button>
//         <div>{users}</div>
//         <form>
//             <input  name="deleteUsername"
//                     onChange = {this.changeHandler.bind(this)} 
//                     className="form-control"/>
                    
//             <button className="btn btn-primary" onClick={this.deleteHandler.bind(this)}>Delete one user</button>
//           </form>
//       <div className="App">
//         <ProductListContainer />
//       </div>
//       </div>
//     );
//   }
// }

export default App;
