import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box
} from '@chakra-ui/react';

const UnnecessaryAlert = () => (
  <Alert status='info' justifyContent='center'>
    <AlertIcon />
    <Box>
      <AlertTitle>Attention!</AlertTitle>
      <AlertDescription>
        This alert means nothing. You can't even close.
      </AlertDescription>
    </Box>
  </Alert>
);

export default UnnecessaryAlert;
