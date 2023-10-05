/**
 * Developed by Skillful Dev LLC
 * Contact: contact@skillfuldev.com
 * website: https://skillfuldev.com
 * Copyright 2023
 */
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from './styles/theme'
import { AppNavigation } from './components/routes/navigation'
import { AuthWrapper } from './components/providers/AuthWrapper'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (1000 * 60), // 10 min
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000
    }
  }
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthWrapper>
          <AppNavigation />
        </AuthWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  </QueryClientProvider>
)

export default App
