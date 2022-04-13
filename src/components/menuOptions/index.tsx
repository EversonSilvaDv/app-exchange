import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, IconButton, Grid, Avatar, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const MenuOptions: React.FC = () => {

  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>();
  
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e?.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleNav = () => {
    navigate('/options');
    setAnchorEl(null);
  }
  return (
    <>
      <IconButton id='option-button' onClick={e => handleOpen(e)}>
        <SettingsIcon />
      </IconButton>
      <Menu 
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item container xs={12} justifyContent='center' mb={1}>
            <Avatar 
              sx={{width: 60, height: 60}}
            >E</Avatar>
          </Grid>
        </Grid>
          <MenuItem onClick={handleClose}>Gerenciar conta</MenuItem>
          <Divider variant='middle'/>
          <MenuItem onClick={handleNav}>Configuração</MenuItem>
          <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </>
  );
}

export default MenuOptions;