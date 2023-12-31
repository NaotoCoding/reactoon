type BasicCardProps = {
  title: string
  description: string
  width: string
  minHeight: string
};

const BasicCard = (props: BasicCardProps) => (
  <div
    className='p-6 bg-white border border-gray-200 rounded-lg'
    style={{width: props.width, minHeight: props.minHeight}}
  >
    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{props.title}</h5>
    <p className='mb-3 font-normal text-gray-700'>{props.description}</p>
  </div>
);

export default BasicCard;
