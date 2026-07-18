import { BarChart } from '@mui/x-charts/BarChart';
export default function Performance() {
  return (
    <>


    <BarChart
      xAxis={[ {data: ['Marks', 'Attempts']}]}
      series={[{ data: [4, 3,6] }]}
      height={300}
      width={300}
      align="center"
    />

    </>
  );
}
