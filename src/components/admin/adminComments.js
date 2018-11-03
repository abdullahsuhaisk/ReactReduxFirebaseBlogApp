import React from 'react'

 const adminComments = (props) => {
    const {comments}= props;
    //console.log(comments);
    var counter= 0;

  return (
    <div>
      <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Interest</th>
            </tr>
        </thead>
        <tbody>
            {comments ? comments.map((user)=>{
                counter ++
                return(
                    <tr key={user.id}>
                        <th scope="row">{counter}</th>
                        <td>{user.userName}</td>
                        <td>{user.comment}</td>
                    </tr>
                )
            }):
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Comment</th>
            </tr>
            }
        </tbody>
      </table>
    </div>
  )
}
export default adminComments;