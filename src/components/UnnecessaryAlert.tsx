import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  ChakraProvider
} from '@chakra-ui/react';

const UnnecessaryAlert = () => (
  <ChakraProvider>
    <Alert status='info' justifyContent='center'>
      <AlertIcon />
      <Box>
        <AlertTitle>Attention!</AlertTitle>
        <AlertDescription>
          This alert means nothing. You can't even close.
        </AlertDescription>
      </Box>
    </Alert>
  </ChakraProvider>
);

export default UnnecessaryAlert;
