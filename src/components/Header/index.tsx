import React from 'react';
import { useHistory } from 'react-router-dom'

import { 
    Button,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

import './styles.css'

import { logout } from '../../services/auth'

const Header: React.FC = () => {

    const history = useHistory()

    const handleSignOut = () => {
        logout()
        history.push('/')
    }

    const handleHistory = () => {
        checkHistory() ? history.push('/home') : history.push('/history') 
    }

    const checkHistory = () => {
        return history.location.pathname === '/history'
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    {checkHistory() ? 'Histórico' : 'Pesquisar'}
                </Typography>
                <Button color="inherit" onClick={handleHistory}>{ checkHistory() ? 'Pesquisar' : 'Histórico'}</Button>
                <Button color="inherit" onClick={handleSignOut}>Sair</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header
