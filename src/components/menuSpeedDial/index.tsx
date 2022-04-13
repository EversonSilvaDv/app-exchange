import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const MenuSpeedDial = () => {

  const navigate = useNavigate();

  const actions = [
    {icon: <DashboardIcon />, title: 'Dashboard'},
    {icon: <MonetizationOnIcon />, title: 'Currency'},
    {icon: <AcUnitIcon />, title: 'TestePage'}
  ];

  const handleNavigate = (page: string) => {
    //navigate(page.toLowerCase());
    if (page === 'Dashboard') {
      navigate('/dashboard');
    }
    if (page === 'Currency') {
      navigate('/currency');
    }
    if (page === 'TestePage') {
      navigate('/test');
    }
  }

  return (
    <>
      <SpeedDial
        ariaLabel="Menu"
        icon={<SpeedDialIcon />}
        direction={'right'}
        FabProps={{sx: {bgcolor: 'secondary.main'}}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.title}
            icon={action.icon}
            tooltipTitle={action.title}
            onClick={() => handleNavigate(action.title)}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default MenuSpeedDial;