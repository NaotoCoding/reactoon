import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import UnnecessaryAlert from './components/UnnecessaryAlert';
import ImagesCarousel from './components/ImagesCarousel';
import BasicCard from './components/BasicCard';
import useLoading from './hooks/useLoading';
import { useEffect } from 'react';
import MonotoneLineGraph from './components/MonotoneLineGraph';

const App = () => {
  const {closeLoading, Loading} = useLoading();

  useEffect(() => {setTimeout(() => { closeLoading() }, 5 * 1000);}, []);

  const graphDots = [
    {version: 'v1.0', performance: 200},
    {version: 'v1.1', performance: 210},
    {version: 'v1.2', performance: 240},
    {version: 'v2.0', performance: 400},
    {version: 'v2.1', performance: 450},
    {version: 'v2.2', performance: 460},
    {version: 'v3.0', performance: 800},
    {version: 'v3.1', performance: 840}
  ];

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
          <MonotoneLineGraph
            width='100%'
            height={500}
            xAxisKey='version'
            yAxisKey='performance'
            graphDots={graphDots}
            lineColor='#8884d8'
          />
        </Box>
      </ChakraProvider>
    </Loading>
  )
};

export default App;
