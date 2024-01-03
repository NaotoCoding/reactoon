import { Heading } from '@chakra-ui/react'

type Props = {
  message: string
  size: '4xl' | '3xl' | '2xl'| 'xl' | 'lg' | 'md' | 'sm' | 'xs'
};

const BasicHeading = (props: Props) => (
  <Heading size={props.size}>{props.message}</Heading>
);

export default BasicHeading;
