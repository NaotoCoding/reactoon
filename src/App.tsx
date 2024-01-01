import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import UnnecessaryAlert from './components/UnnecessaryAlert';
import ImagesCarousel from './components/ImagesCarousel';
import BasicCard from './components/BasicCard';
import useLoading from './hooks/useLoading';
import { useEffect } from 'react';

const App = () => {
  const {closeLoading, Loading} = useLoading();

  useEffect(() => {setTimeout(() => { closeLoading() }, 5 * 1000);}, []);

  return(
    <Loading width='100%' height='100vh' message="If you wonder what this site is loading, you're being duped, because it's loading nothing.">
      <ChakraProvider>
        <Header />
        <UnnecessaryAlert />
        <Box width='90%' margin='auto' marginTop='30px'>
          <ImagesCarousel width='100%' height='300px'>
            <img src='react-bootstrap-logo.svg' width='140px' height='140px'/>
            <img src='antd-logo.svg' width='140px' height='140px'/>
            <img src='chakra-logo.svg' width='140px' height='140px'/>
            <img src='tailwind-logo.svg' width='140px' height='140px'/>
          </ImagesCarousel>
          <BasicCard
            title="This site isn't sponsored by these services."
            description='This site is an individual site using these services. Thank you.'
            width='100%'
            minHeight='100px'
          />
        </Box>
      </ChakraProvider>
    </Loading>
  )
};

export default App;
