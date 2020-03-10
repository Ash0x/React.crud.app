import React, { useState } from 'react'
import { Form, Button, Label, Input} from 'reactstrap'

function AddUserForm(props) {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (

        <Form onSubmit={
            event => {
                event.preventDefault()
                if (!user.name || !user.username) return

                props.addUser(user)
                setUser(initialFormState)
            }
        }
        >
            <Label>Name</Label>
            <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <Label>Username</Label>
            <Input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <Button>Add new user</Button>
            

        </Form>

    )

}

export default AddUserForm