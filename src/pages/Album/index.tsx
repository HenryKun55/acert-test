import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    List, 
    Button,
} from '@material-ui/core';

import { 
    Container,
    ContainerButton
} from './styles';

import { ListSearch } from '../../components'

import { ISuggestion } from '../../models/ISuggestion'

import api from '../../services/api'

const Album : React.FC= (props: any) => {

    const history = useHistory()

    const [albums = [], setAlbums] = useState<ISuggestion[]>([]);

    async function requestAlbum() {
        const request = await api.get('', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                format: process.env.REACT_APP_FORMAT,
                limit: 10,
                method: 'artist.gettopalbums',
                artist: props.location.state.suggestion
            }
        })
        const albums = request.data.topalbums.album
        let al: ISuggestion[] = []
        albums.map((a: any) => {
            al.push(
                    {
                        suggestion: a.name,
                        avatar: a.image[1]["#text"],
                    }
            )
            return al
        })
        setAlbums(al)
    }

    useEffect(() => {
        requestAlbum()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function renderSuggestion(){
        return (
            <List component="nav" aria-label="artists">
                {albums.map( (suggestion, key ) => (
                    <ListSearch key={key} suggestion={suggestion.suggestion} avatar={suggestion.avatar} />
                ))}
            </List>
        )
    }
    
    return (
        <Container>
            <ContainerButton>
                <Button variant="contained" color="primary" onClick={() => history.push('/home')}>Voltar</Button>
            </ContainerButton>
            {renderSuggestion()}
        </Container>
    );
}

export default Album