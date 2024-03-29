import { useState, createContext } from "react"

export const Notification = ({message, severity}) => {
    
    const notificationStyles = {
        position: "absolute",
        bottom: 35,
        left: 15,
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        width: "auto",
        height: "auto",
        backgroundColor: severity === "success" ? "green" : "red",
        padding: "10px 20px 10px 20px",
        color: "black",
        borderRadius: "10px"
    }

    if(message === "") {
        return null
    }

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [ message, setMessage ] = useState("")
    const [ severity, setSeverity ] = useState("")

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

// export const useNotificationServices = () => {
//     return useContext(NotificationContext)
// } 

export default NotificationContext