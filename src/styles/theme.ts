import { createTheme, responsiveFontSizes } from '@mui/material'
import './index.css'

export const DEFAULT_SHADOW = '0 0 10px rgba(3,3,3,0.1)'

const baseTheme = createTheme()

export const theme = responsiveFontSizes(baseTheme)
