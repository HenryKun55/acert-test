import React, { useState, useEffect } from 'react';
import { 
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

import db from '../../config/db'

import ISearch from '../../models/ISearch'

import { getId } from '../../services/auth'

import { Container } from './styles'

const History: React.FC = () => {

    const [history, setHistory] = useState<ISearch[]>([])

    useEffect(() => {
        try {
            db.searchs.where({ idUser: Number(getId()) }).toArray().then(searchs => {
                setHistory(searchs)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    
    return (
        <Container>
            <List component="nav" aria-label="history">
            {history.map( (h, key) => (
                <ListItem key={key} button>
                    <ListItemText primary={h.name} />
                </ListItem>
        ))}
            </List> 
        </Container>
    )
}

export default History