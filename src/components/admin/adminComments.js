import React from 'react';
import firebase from 'firebase'

 const adminComments = (props) => {
    const {comments}= props;
    const firestore = firebase.firestore() //involke
    //console.log(comments);
    var counter= 0;
    function deleteClick (e,id)  {
        //if you choose write a action you can
        e.preventDefault();
        console.log(id);
        firestore.collection('Comments').doc(id).delete().then(()=>console.log('Comment deleted succesfully')).catch(err=>{
            console.log(err)
        })

    }
  return (
      
    <div>
    <h4 className="text-center">Comments</h4>      
      <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Comment</th>
            </tr>
        </thead>
        <tbody>
            {comments ? comments.map((comment)=>{
                counter ++
                return(
                    <tr key={comment.id}>
                        <th scope="row">{counter}</th>
                        <td>{comment.userName}</td>
                        <td>{comment.comment}</td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm" onClick={(e)=>deleteClick(e,comment.id)}>Delete</button>
                        </td>
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