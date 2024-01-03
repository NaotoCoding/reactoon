import MonotoneLineGraph from "./MonotoneLineGraph";
import BasicHeading from "./BasicHeading";

const Performance = () => {
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
    <>
      <div style={{marginBottom: '15px'}}>
        <BasicHeading message='Performance' size='xl' />
      </div>
      <MonotoneLineGraph
        width='60%'
        height={500}
        xAxisKey='version'
        yAxisKey='performance'
        graphDots={graphDots}
        lineColor='#8884d8'
      />
    </>
  );
};

export default Performance;
