import { Box } from '@mui/material';
import React, {useState} from 'react'
import PrefDialog from '../components/PrefDialog';

const HomePage = () => {
   const [prefDialog, setPrefDialog] = useState(true);
  return (
    <Box>
      {prefDialog && <PrefDialog setPrefDialog={setPrefDialog}/>}
      Done
    </Box>
  )
}

export default HomePage