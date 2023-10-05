import { Box, Typography, TypographyProps } from '@mui/material'

interface TypographyIconProps extends TypographyProps {
  startIcon?: any
  endIcon?: any
}

export const TypographyIcon = (props: TypographyIconProps) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
  }}>
    {
      props.startIcon && <props.startIcon />
    }
    <Typography {...props}>{props.children}</Typography>
    {
      props.endIcon && <props.endIcon />
    }
  </Box>
)
