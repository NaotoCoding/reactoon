import GoingAroungClockHand from './components/GoingAroundClockHand';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import UnnecessaryAlert from './components/UnnecessaryAlert';
import ImagesCarousel from './components/ImagesCarousel';

const App = () => (
  <ChakraProvider>
    <Header />
    <UnnecessaryAlert />
      <ImagesCarousel width='55%' height='300px'>
        <img src='react-bootstrap-logo.svg' width='140px' height='140px'/>
        <img src='antd-logo.svg' width='140px' height='140px'/>
        <img src='chakra-logo.svg' width='140px' height='140px'/>
      </ImagesCarousel>
    <GoingAroungClockHand />
  </ChakraProvider>
);

export default App;
