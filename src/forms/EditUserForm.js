import React, { useState, useEffect } from 'react'
import { Form, Button, Label, Input} from 'reactstrap'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Label>Name</Label>
      <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <Label>Username</Label>
      <Input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <Button>Update user</Button>{' '}
      <Button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm