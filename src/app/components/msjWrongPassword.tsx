import { useState } from 'react';

export default function Notification () {

    const [Message, setMessage] = useState("");
    const [showNotification, setShowNotification ] = useState(false);
    const showMessage = (message:string) => {
        setMessage(message);
        setShowNotification(true);
        setTimeout(() => {
         setShowNotification(false);
        },2800);
    };

    return null

}

