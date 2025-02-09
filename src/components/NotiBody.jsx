import "./NotiBody.css"

export default function NotiBody({notification,notifications,setNotifications}) {
    const changeStatus=(id)=> {
        const updatedNotifications=notifications.map((notification)=> {
            if(notification.id === id) {
                return {...notification,isRead:true}
            }
            return notification
        })
        setNotifications(updatedNotifications)
    }

    return (
    <div onClick={()=>changeStatus(notification.id)}  className='not-div'
         style={!notification.isRead?{backgroundColor:"green"}:null}>
            <img src={notification.profilePic} alt="" />
            <span style={{color:"pink"}}>{notification.username}</span>
            <span>{notification.action}</span>
            <span>{notification.isRead}</span>
            {notification.groupName?
            <p style={{color:'blue'}}>{notification.groupName}</p>: null}
            {!notification.isRead? <div className='circle'> </div>:null}
     </div>
    )
}

