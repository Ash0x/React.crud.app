import React from "react"
import { Table, Button } from 'reactstrap'

function UserTable(props) {
    return (
        <Table dark striped bordered size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <Button outline color="warning" size="sm" onClick={() => props.editRow(user)} >Edit</Button>{' '}
                                <Button outline color="danger" size="sm" onClick={() => props.deleteUser(user.id)} >Delete</Button>
                            </td>
                        
                        </tr>
                    ))
                    ) : (
                        <td>
                            <tr colSpan={3}>
                                No Users
                            </tr>
                        </td>
                    )
                }
            </tbody>
        </Table>
    )
}

export default UserTable