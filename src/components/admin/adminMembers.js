import React from 'react'

 const adminMembers = (props) => {
    const{users}= props;
//    console.log(users);
    var counter= 0;

  return (
    <div>
      <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Interest</th>
                <th scope="col">email</th>
            </tr>
        </thead>
        <tbody>
            {users ? users.map((user)=>{
                counter ++
                return(
                    <tr key={user.id}>
                        <th scope="row">{counter}</th>
                        <td>{user.name}</td>
                        <td>{user.interest}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            }):
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Interest</th>
                <th scope="col">email</th>
            </tr>
            }
        </tbody>
      </table>
    </div>
  )
}
export default adminMembers;