import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import { registerUser } from '../services/userServices'
import Grid from '@material-ui/core/Grid'

function RegisterView(props) {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })
    
    const onSubmit = () => {
        registerUser(user, props)
    }


    const onType = (event) => {
        switch (event.target.id) {
            case 'name':
                setUser({
                    ...user,
                    name: event.target.value
                })
                break;
            case 'lastName':
                setUser({
                    ...user,
                    lastName: event.target.value
                })
                break;
            case 'email':
                setUser({
                    ...user,
                    email: event.target.value
                })
                break;
            case 'password':
                setUser({
                    ...user,
                    password: event.target.value
                })
                break;    
            default:
                break;
        }
    }

    return(
    <Grid container justify='center'>
        <RegisterForm onSubmit={onSubmit} onType={onType} />
    </Grid>
    )
}

export default RegisterView