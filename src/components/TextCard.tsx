import Card from 'react-bootstrap/Card';

type Props = {
  message: string
}

const TextCard = (props: Props) => (
  <Card>
    <Card.Body>{props.message}</Card.Body>
  </Card>
);

export default TextCard;
