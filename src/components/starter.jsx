
export default function Starter({notifications,setNotifications}) {
    const markAllAsRead=()=>{
        const allRead=notifications.map((noti)=> {
            return {...noti,isRead:true}
        })
        setNotifications(allRead)
    }
    const counter = notifications.filter(noti =>!noti.isRead).length
    return (
        <section>
            <h2>Notifications {counter}</h2>
            <p style={{cursor:"pointer"}} onClick={markAllAsRead}>Mark all as read</p>
        </section>
    )
}