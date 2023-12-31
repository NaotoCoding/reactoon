import { Carousel } from 'antd';
import { Children, ReactElement, cloneElement } from 'react';

type ImagesCarouselProps = {
  height: string
  width: string
  backgroundColor?: string
  children: ReactElement[]
};

type ImagesCarouselBodyProps = Omit<ImagesCarouselProps, 'width'>;

const ImagesCarouselBody = ({height, backgroundColor, children}: ImagesCarouselBodyProps) => (
  <Carousel autoplay style={{height, backgroundColor, display: 'flex', alignItems: 'center'}}>
    {Children.map(children, (child: ReactElement) => (
      <div>{cloneElement(child, {style:{margin:'auto'}})}</div>
    ))}
  </Carousel>
);

const ImagesCarousel = ({height, width, backgroundColor='#343a40', children}: ImagesCarouselProps) => (
  <div style={{width}}>
    <ImagesCarouselBody height={height} backgroundColor={backgroundColor}>
      {children}
    </ImagesCarouselBody>
  </div>
);

export default ImagesCarousel;
