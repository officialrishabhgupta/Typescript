import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1500, bgcolor: 'slateGrey' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Learning Typescript
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
            With static type checking,you get to learn about potential bugs as you're typing the code,than heading to the browser and figuring out at runtime 
            Provides a way to describe the shape of an object hence providing better documentation and autocomplete
            Makes maintenance and refactoring of large code bases much easier.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }} style={{paddingBottom:'30px'}}>
        <Typography gutterBottom variant="body1">
          Programming
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="React TypeScript" />
          <Chip label="React" />
          <Chip label="BrowserRouter" />
          <Chip label="Routing" />
        </Stack>
      </Box>
    </Box>
  );
}
