import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddEmployee extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      id: '',  
      employee_name: '',  
      employee_salary: '',  
      employee_age: '',  
    }  

    if (this.props.isEdit) {  
      this.state = props.user  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();
    var data = this.state;
    if(data.employee_name && data.employee_age && data.employee_salary){  
        this.props.onFormSubmit(this.state);  
        this.setState(this.initialState);  
    } else {
      alert('Please enter all fields for submission/update');
    }
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.id) {  
  
      pageTitle = <h2>Edit User</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add User</h2>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="name">  
                <Form.Label>Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="employee_name"  
                  value={this.state.employee_name}  
                  onChange={this.handleChange}  
                  placeholder="Employee Name" />  
              </Form.Group>  
            
              <Form.Group controlId="salary">  
                <Form.Label>Salary</Form.Label>  
                <Form.Control  
                  type="number"  
                  name="employee_salary"  
                  value={this.state.employee_salary}  
                  onChange={this.handleChange}  
                  placeholder="Salary" />  
              </Form.Group>  
              <Form.Group controlId="Age">  
                <Form.Label>Age</Form.Label>  
                <Form.Control  
                  type="number"  
                  name="employee_age"  
                  value={this.state.employee_age}  
                  onChange={this.handleChange}  
                  placeholder="Age" />  
              </Form.Group>  
              <Form.Group>  
                <Form.Control type="hidden" name="id" value={this.state.id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddEmployee;