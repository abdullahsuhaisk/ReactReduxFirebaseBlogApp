import React from 'react';

 const adminNotifications = (props) => {
const {noti}=props
  return (
    <div>
        <table class="table table-primary" style={{border: '1px  '}}>
            <thead>
        <tr>
        <th scope="col" colspan="3">Notifications</th>
        </tr>
            </thead>
            <tbody>
                {
                    noti && noti.map(item=> {
                        return(
                            <tr>
                                <td className="table-success">{item.content}</td>
                                <td className="table-info">{item.user}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
export default adminNotifications;
