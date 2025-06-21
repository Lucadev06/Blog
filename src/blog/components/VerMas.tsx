import { Box, Typography, Divider, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Case {
  title: string;
  image: string;
  content: string;
}

interface Props {
  caso: Case;
  open: boolean;
  onClose: () => void;
}

export const VerMas = ({ caso, open, onClose }: Props) => {
  return (
    <Dialog open={open} maxWidth="md" fullWidth onClose={onClose}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
      </Box>
      <DialogTitle>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {caso.title}
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={caso.image}
            alt={caso.title}
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
          />
          <Typography>{caso.content}</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
