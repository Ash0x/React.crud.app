import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App() {

  const usersData = [
    { id: 1, name: 'Tinker', username: 'tinkerbell' },
    { id: 2, name: 'Tim', username: 'pirateTim' },
    { id: 3, name: 'Tammy', username: 'tammyplease' },
    { id: 4, name: 'Alex', username: 'ashox' }
  ]

  const [users, setUsers] = useState(usersData)

  const initialFormState = { id: null, name: '', username: '' }
  
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser: user)))
  }

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD with React Hooks</h1>
          <div>
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div >
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
  );
}

export default App;
