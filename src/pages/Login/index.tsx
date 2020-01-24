import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'

import { 
    TextField,
    Button
} from '@material-ui/core';

import {
    Container,
    ContainerButton,
    Logo
} from './styles';

import IUser from '../../models/IUser'

import db from '../../config/db'

import { login } from '../../services/auth'

import { phone } from '../../assets'

const Login: React.FC = () => {

    const history = useHistory()
    const [input, setInput] = useState<IUser>({ email: '', password: '' })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
      })
    }

    const handleLogin = () => {
        const { email, password } = input
        try {
            db.users.where({email: email || '', password: password || ''}).each((user) => {
                login(user.id)
                history.push('/home')
            })
        } catch (err) {
            // console.log(err)
        }
    }

    return (
        <Container>
            <Logo src={phone}/>
            <TextField margin="normal" label="Email" fullWidth={true} name="email" onChange={handleInputChange}/>
            <TextField margin="dense" label="Password" fullWidth={true} name="password" onChange={handleInputChange} />
            <ContainerButton>
                <Button variant="contained" color="secondary" onClick={handleLogin}>Entrar</Button>
            </ContainerButton>
            <ContainerButton>
                <Button onClick={() => history.push('/register')}>Registrar</Button>
            </ContainerButton>
        </Container>
    );
}

export default Login
