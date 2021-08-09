import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface QuantityProps {
  data: number[];
  label: string;
}

const Quantity: React.FC<QuantityProps> = ({ data, label }) => {
  const options = {
    title: {
      text: label,
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Quantity;
