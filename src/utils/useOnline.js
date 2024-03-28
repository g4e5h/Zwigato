/**
 * Return true or false 
 * 
 */
import { useEffect, useState } from "react";


const  useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    
    useEffect(()=>{
        
        function handleOnline(){
                console.log("console.log from 'online' event listener");
                setIsOnline(true);
        }

        function handleOffline(){
            console.log("console.log from 'offline' event listener");
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);

        window .addEventListener('offline', handleOffline);

        return ()=>{
            window.removeEventListener('online', handleOnline );
            window.removeEventListener('online', handleOffline );
        }

    }, []);


    return isOnline;
}

export default useOnline;


