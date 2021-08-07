import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface ChartsProps {
  prices: number[];
  label: string;
}

const Charts: React.FC<ChartsProps> = ({ prices, label }) => {
  console.log(prices);
  const options = {
    title: {
      text: label,
    },
    series: [
      {
        data: prices,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Charts;
