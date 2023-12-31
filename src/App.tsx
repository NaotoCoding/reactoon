import GoingAroungClockHand from './components/GoingAroundClockHand';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import UnnecessaryAlert from './components/UnnecessaryAlert';

const App = () => (
  <ChakraProvider>
    <Header />
    <UnnecessaryAlert />
    <GoingAroungClockHand />
  </ChakraProvider>
);

export default App;
