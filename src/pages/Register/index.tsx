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

import db from '../../config/db'

import { phone } from '../../assets'

const Register: React.FC = () => {

    const history = useHistory()
    const [input, setInput] = useState({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
      })
    }

    const handleRegister = async () => {
        const { name, email, password }: any = input
        try {
            await db.users.add({name, email, password})
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Logo src={phone}/>
            <TextField margin="dense" label="Nome" fullWidth={true} name="name" onChange={handleInputChange} />
            <TextField margin="normal" label="Email" fullWidth={true} name="email" onChange={handleInputChange} />
            <TextField margin="dense" label="Password" fullWidth={true} name="password" onChange={handleInputChange} />
            <ContainerButton>
                <Button variant="contained" color="primary" onClick={handleRegister} >Registrar</Button>
            </ContainerButton>
            <ContainerButton>
                <Button onClick={() => history.push('/')}>Fazer Login</Button>
            </ContainerButton>
        </Container>
    );
}

export default Register

