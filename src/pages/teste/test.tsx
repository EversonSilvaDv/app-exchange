import { Box } from '@mui/material';


const Test: React.FC = () => {



  return (
    <div>


      <Box 
        sx={{
          width: '100%',
          height: 'auto',
          color: '#fff',
        }}
      >
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"profile stats graphics"
            "profile stats graphics"
            "profile stats graphics"
            "footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: 'profile', bgcolor:'#ff0000'}}>Profile</Box>
          <Box sx={{ gridArea: 'stats', bgcolor:'#00ff00'}}>Stats</Box>
          <Box sx={{ gridArea: 'graphics', bgcolor:'#0000ff'}}>Graphics</Box>
          <Box sx={{ gridArea: 'footer', bgcolor:'#000000'}}>Footer</Box>
        </Box>

      </Box>



    </div>
  );
}

export default Test;
