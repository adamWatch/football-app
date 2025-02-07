import { FootballApp } from './components/FootballApp/FootballApp'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FootballApp/>
      </QueryClientProvider>
    </>
  )
}

export default App
