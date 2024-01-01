import { ReactNode, useState } from 'react';
import GoingAroungClockHand from '../components/GoingAroundClockHand';
import TextCard from '../components/TextCard';

type Props = {
  children: ReactNode
  width: string
  height: string
  message: string
};

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  const closeLoading = () => { setLoading(false); };

  const Loading = (props: Props) => {
    if (!loading) { return <>{props.children}</> };
    
    return(
      <div style={{width: props.width, height: props.height, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <div style={{width: '100%', marginBottom: '10px', display: 'flex', justifyContent: 'center'}}>
            <GoingAroungClockHand />
          </div>
          <TextCard message={props.message} />
        </div>
      </div>
    );
  };

  return { Loading, closeLoading };
};

export default useLoading;
