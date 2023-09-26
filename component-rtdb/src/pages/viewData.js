import React, { useEffect, useState} from 'react';
import {app, db } from '../config/firebase';
import {ref, onValue} from 'firebase/database';



function ViewData () {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const userCount = ref(db, 'users');
        return onValue(userCount, (snapshot)=>{

            const data = snapshot.val();

            if(snapshot.exists()){
                Object.values(data).map((user)=>{
                    setUsers((users)=>[...users,user])
                })
            }
        })
    },[])

    return(
        <div> 
            <ul>
            {users.map((user,index)=>(
                <li key={index}>{user.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default ViewData;