import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddDepartmentModal from './AddDepartmentModal';

export default class Department extends Component {

    constructor(props){
        super(props);
        this.state = {deps: [], addModalShow: false}
    }

    refreshList(){
        this.setState({deps: [{"DepartmentId": 1, "DepartmentName": "IT"},
                            {"DepartmentId": 2, "DepartmentName": "Support"}
                        ]})
    }

    componentDidMount(){
        this.refreshList();
    }
    render() {
        let addModalClose = () => {
            this.setState({addModalShow: false});
        }
        return (
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>DepartmentId</td>
                        <td>DepartmentName</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.deps.map(d =>
                        <tr key = {d.DepartmentId}>
                            <td>{d.DepartmentId}</td>
                            <td>{d.DepartmentName}</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <ButtonToolbar>
                <Button variant='primary'
                onClick={()=> this.setState({addModalShow: true})}>
                    Add Department
                </Button>
                <AddDepartmentModal show={this.state.addModalShow}
                        onHide={addModalClose} >
                </AddDepartmentModal>
            </ButtonToolbar>
            </div>
        )
    }
}
