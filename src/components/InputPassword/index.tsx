import React, { useState } from 'react';

import { 
    Input,
    InputAdornment,
    IconButton
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const InputPassword: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword( !showPassword )
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Input 
            margin="dense" 
            fullWidth={true} 
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
        />
    );
  }

export default InputPassword