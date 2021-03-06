import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

     const [email, setEmail] = useState('')
     const [success, setSuccess] = useState(false)
     const {token} = useAuth()

     const handleOnBlur = e =>{
          setEmail(e.target.value)
     }
     const handleAdminSubmit = e =>{
          const user = {email};
           fetch('https://aqueous-shore-28644.herokuapp.com/users/admin',{
                method: 'PUT',
                headers:{
                     'authorization': `Bearer ${token}`,
                     'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
           })
           .then(res => res.json())
           .then( data =>{
               if(data.modifiedCount){
                    setSuccess(true)
               }
           })
          e.preventDefault()
     }
     return (
          <div>
               <h2>Make An Admin</h2>

               <form onSubmit={handleAdminSubmit}>
               <TextField id="standard-basic"
               sx={{width:'50%'}}
                label="Email" 
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                 />
                 <Button type="submit" variant="contained">Make Admin</Button>
               </form>
               {success && <Alert severity="success">Admin create Successfully</Alert>}
          </div>
     );
};

export default MakeAdmin;