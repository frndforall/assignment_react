import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';  
 
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
  
class EmployeeActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddUser: false,  
      error: null,  
      response: {},  
      userData: {},  
      isEdituser: false,  
      isUserDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({     
      isAddUser: true,  
      isEdituser: false,
      isUserDetails: false
    })  
  }  
  onDetails() {  
    this.setState({     
      isAddUser: false,  
      isEdituser: false,
      isUserDetails: true
    })  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddUser: true });  
    this.setState({ isUserDetails: false });  
    if (this.state.isEdituser) {  
    //  axios.put(apiUrl + 'UpdateEmployeeDetails',data).then(result => {  
    //   alert(result.data);  
    //     this.setState({  
    //       response:result,    
    //       isAddUser: false,  
    //       isEdituser: false  
    //     })  
    //   }); 
        alert(data.employee_age); 
         this.setState({     
          isAddUser: false,  
          isEdituser: false,
          userData: data
        })  
    } else {  
    
    //  axios.post(apiUrl + 'InsertUserDetails',data).then(result => {  
    //   alert(result.data);  
    //     this.setState({  
    //       response:result,    
    //       isAddUser: false,  
    //       isEdituser: false  
    //     })  
    //   });  
        alert(data.employee_age);
        this.setState({     
          isAddUser: false,  
          isEdituser: false,
          userData: data
        })  
  
    }  
    
  }  
  
  editUser = user => {  
  
    this.setState({ isUserDetails: false,
        isEdituser: true,  
        isAddUser: true,  
        userData: user });  
  }  
  
  render() {  
    let userForm;  
    debugger;
    if (this.state.isAddUser || this.state.isEditUser) {  
      userForm = <AddEmployee onFormSubmit={this.onFormSubmit} isEdit={this.state.isEdituser} user={this.state.userData} />         
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>CURD operation in React</h1>  
        <hr></hr>  
        {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}> User Details</Button>}  
        {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add User</Button>}  
        <br></br>  
        {!this.state.isAddUser && <EmployeeList employee={this.state.userData} editUser={this.editUser} />}  
        {userForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default EmployeeActionApp;