import {
  Box,
  Button,
  CircularProgress,
  Container,
  Modal,
  Typography
} from '@mui/material'

interface Props {
  open: boolean
  handleClose: () => void
  textPrompt: string
  isLoading: boolean
  confirm: () => Promise<void>
  title: string
}

export const DeleteModal = ({
  open,
  handleClose,
  textPrompt,
  isLoading,
  confirm,
  title
}: Props) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-delete"
    aria-describedby="modal-modal-delete-car"
    sx={{
      display: 'flex',
      alignitems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <Container maxWidth='sm'>
      <Box sx={{
        backgroundColor: 'white',
        display: 'flex',
        alignitems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {textPrompt}
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginY: '1rem'
        }}>
          <Button
            variant='outlined'
            onClick={handleClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            color='error'
            variant='contained'
            onClick={confirm}
            disabled={isLoading}
          >
            {
              isLoading
              && <CircularProgress size='1rem' />
            }
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  </Modal>
)
