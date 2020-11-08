import React from 'react';
class Students extends React.Component{    
    constructor(){
        super();
        this.state = {
            students:['ravi','mahi','janu','thiru']
        }
    }
    addStudent = ()=>{
        var newStudent = document.getElementById("d1").value;
        this.setState({students:[...this.state.students,newStudent]})        
    }
    deleteStudent = (index)=>{
        var temp = this.state.students;
        temp.splice(index,1);
        this.setState({students:[...temp]})
    }
    editStudent = (index)=>{
        
    }
    render(){
        return(
            <div>
                <h1>Lets See Our Students</h1>
                <input type="text" id="d1"/>
                <button onClick={this.addStudent}>Add Student</button>
                {                    
                    this.state.students.map((s,i)=>{
                        return (<li>
                                    {s}
                                    <button onClick={()=>{this.deleteStudent(i)}}>
                                        Delete
                                    </button>
                                    <button onClick={()=>{this.editStudent(i)}}>
                                        Edit
                                    </button>
                                </li>)
                    }) 
                }                              
            </div>
        )
    }
}
export default Students;