import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest';

import { List } from '@material-ui/core'

import ListSearch from './ListSearch'
import './styles.css'

import api from '../../services/api'

import { ISuggestion } from '../../models/ISuggestion'

import db from '../../config/db'

import { getId } from '../../services/auth'
import { useHistory } from 'react-router-dom';

const SearchField: React.FC = () => {

  const [value, setValue] = useState("");
  const [suggestions = [], setSuggestions] = useState<ISuggestion[]>([]);

  const history = useHistory()

  async function requestArtist(artist: string) {
    const request = await api.get('', {
      params: {
          api_key: process.env.REACT_APP_API_KEY,
          format: process.env.REACT_APP_FORMAT,
          limit: 10,
          method: 'artist.search',
          artist
      }
    })
    const artists = request.data.results.artistmatches.artist
    let s: ISuggestion[] = []
    artists.map((a: any) => {
      s.push(
        {
          suggestion: a.name,
          listeners: a.listeners,
        }
      )
      return s
    })
    setSuggestions(s)
  }

  async function saveSearch (name: string, idUser: number) {
    await db.searchs.add({ name, idUser })
  }

  const shouldRenderSuggestions = (value: string) => {
    return value.trim().length > 2;
  }

  const renderSuggestion: React.FC<ISuggestion> = ({ suggestion, avatar, listeners }) => {
    return (
      <List component="nav" aria-label="artists">
        <ListSearch suggestion={suggestion} avatar={avatar} listeners={listeners} />
      </List>
    )
  }
  
  return (
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          requestArtist(value)
        }}
        onSuggestionSelected={(_, { suggestionValue, suggestion }) => {
          saveSearch(suggestionValue, Number(getId()))
          history.push('/album', suggestion)
        }
        }
        getSuggestionValue={suggestion => suggestion?.suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "Qual a banda de hoje ?",
          value: value,
          onChange: (_, { newValue }) => {
            setValue(newValue);
          }
        }}
        shouldRenderSuggestions={shouldRenderSuggestions}
        highlightFirstSuggestion={true}
      />
  );
};

export default SearchField
