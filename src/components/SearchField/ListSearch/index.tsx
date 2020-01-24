import React from 'react';
import { 
    Avatar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction
} from '@material-ui/core';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';

import { ISuggestion } from '../../../models/ISuggestion'

const ListSearch: React.FC<ISuggestion> = ({ suggestion, avatar, listeners }) => {

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar alt={suggestion} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={suggestion} secondary={ listeners ? `Ouvintes ${listeners}` : ''} />
      {listeners && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="albuns">
            <QueueMusicIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

export default ListSearch