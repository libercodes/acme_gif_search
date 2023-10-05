import { Box, CssBaseline } from '@mui/material'

interface Props {
  children: any
}

export const Layout = (props: Props) => (
  <Box>
    <CssBaseline />
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {props.children}
    </Box>
  </Box>
)
