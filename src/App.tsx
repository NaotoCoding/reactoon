import GoingAroungClockHand from './components/GoingAroundClockHand';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => (
  <ChakraProvider>
    <Header />
    <GoingAroungClockHand />
  </ChakraProvider>
);

export default App;
