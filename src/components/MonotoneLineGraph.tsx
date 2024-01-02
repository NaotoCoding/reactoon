import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

type GraphDots = {
  [key: string]: number | string;
}

type Props = {
  width: string
  height: number,
  xAxisKey: string
  yAxisKey: string
  graphDots: GraphDots[]
  lineColor: string
}

const MonotoneLineGraph = (props: Props) => {
  return(
    <ResponsiveContainer width={props.width} height={props.height} >
      <LineChart data={props.graphDots}>
        <Line type='monotone' dataKey={props.yAxisKey} stroke={props.lineColor} />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey={props.xAxisKey} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
};

export default MonotoneLineGraph;
