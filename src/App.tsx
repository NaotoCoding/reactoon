import GoingAroungClockHand from './components/GoingAroundClockHand';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import UnnecessaryAlert from './components/UnnecessaryAlert';
import ImagesCarousel from './components/ImagesCarousel';
import BasicCard from './components/BasicCard';

const App = () => (
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
    <GoingAroungClockHand />
  </ChakraProvider>
);

export default App;
