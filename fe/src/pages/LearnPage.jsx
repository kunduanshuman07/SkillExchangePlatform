import { Box } from '@mui/material';
import React, {useState} from 'react'
import PrefDialog from '../components/PrefDialog';

const LearnPage = () => {
   const [prefDialog, setPrefDialog] = useState(true);
  return (
    <Box>
      {prefDialog && <PrefDialog setPrefDialog={setPrefDialog}/>}
    </Box>
  )
}

export default LearnPage