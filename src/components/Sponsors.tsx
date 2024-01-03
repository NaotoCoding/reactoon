import BasicHeading from './BasicHeading';
import ImagesCarousel from './ImagesCarousel';
import BasicCard from './BasicCard';

const Sponsors = () => (
  <>
    <div style={{marginBottom: '15px'}}>
      <BasicHeading message='Sponsors' size='xl' />
    </div>
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
  </>
);

export default Sponsors;
