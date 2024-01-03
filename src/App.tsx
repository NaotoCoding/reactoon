import Header from './components/Header';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import UnnecessaryAlert from './components/UnnecessaryAlert';
import useLoading from './hooks/useLoading';
import Sponsors from './components/Sponsors';
import Performance from './components/Performance';

const App = () => {
  const {closeLoading, Loading} = useLoading();
  useEffect(() => {setTimeout(() => { closeLoading() }, 3 * 1000);}, []);

  return(
    <Loading width='100%' height='100vh' message="If you wonder what this site is loading, you're being duped, because it's loading nothing.">
      <ChakraProvider>
        <Header />
        <UnnecessaryAlert />
        <Box width='90%' margin='auto' marginTop='30px'>
          <div style={{marginBottom: '100px'}}>
            <Sponsors />
          </div>
          <div style={{marginBottom: '100px'}}>
            <Performance />
          </div>
        </Box>
      </ChakraProvider>
    </Loading>
  )
};

export default App;
