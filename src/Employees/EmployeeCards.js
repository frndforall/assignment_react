import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';   
  
class EmployeeCards extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           employees:[],  
           response: {}   
        }  
    }  
  

    componentDidMount(){  
       axios.get(apiUrl).then(response => response.data).then(  
            (result)=>{  
                console.log(result.data);
                const user = this.props.employee;
                console.log(user);
                if(user && user.id) {
                     this.updateEmployeeData(user,result.data);   
                } else if(user && user.employee_name) {
                     this.addEmployee(user,result.data);  
                } else {
                    this.setState({
                        employees: result.data    
                    });
                }
               
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  


    updateEmployeeData(employee, data) {
         // TODO: ADD API to implement the update operation and update the UI. We are performing the operations to find the id and update the data locally.
        // Data would refresh once we hit the api as no api operation is performed.
        var updateData= [...data];
        var index = updateData.findIndex(emp => emp.id === employee.id);
        console.log(index);
        if(index>-1) {
            updateData[index].employee_age = employee.employee_age;
            updateData[index].employee_name = employee.employee_name;
            updateData[index].employee_salary = employee.employee_salary;
        } else {
            alert('No record defined with this id');
        }
        this.setState({  
            employees:updateData
        });  
    }

    addEmployee(employee,data) {
        // TODO: ADD API to implement the add operation and update the UI. We are performing the operations to find the id and update the data locally.
        // Data would refresh once we hit the api as no api operation is performed.
        const employees = [...data];
        employee.id=employees.length+1;
        var updatedData = [...data,employee];
       this.setState({
           employees: updatedData
       });
    }
  
      
    deleteUser(id) {  
      const { employees } = this.state;     
        alert('User Deleted');

        // TODO: ADD API to implement the delete operation and update the UI based on ID. Right now We are filtering the date with ID.
        this.setState({
            employees: [...this.state.employees].filter(employee=>employee.id !== id)
        });

    }  
  
    render(){         
        const{error,employees}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
                <div>  
                      
                  <Table striped bordered hover>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Id</th>  
                        <th>Name</th>  
                        <th>Salary</th>  
                        <th>Age</th>   
                        <th>Action</th>  
                      </tr>  
                    </thead>  
                    <tbody>  
                      {employees.map(user => (  
                        <tr key={user.id}>  
                        <td>{user.id}</td>  
                          <td>{user.employee_name}</td>  
                          <td>{user.employee_salary}</td>  
                          <td>{user.employee_age}</td>  
                          <td><Button variant="info" onClick={() => this.props.editUser(user)}>Edit</Button> <t/>      
                          <Button variant="danger" onClick={() => this.deleteUser(user.id)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      )
                      )}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default EmployeeCards;