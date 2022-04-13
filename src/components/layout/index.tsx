import { Paper } from '@mui/material';
import AppTopBar from '../appBar/index';

const Layout = (props: any) => {
  return (
    <>
      <AppTopBar />

      <Paper elevation={3} sx={{minHeight: 'calc(100vh - 195px)'}}>
        {props.children}
      </Paper>
    </>
  );
}
export default Layout;