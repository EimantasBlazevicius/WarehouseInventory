import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PriceInterface } from "../../../App";

export interface PriceProps {
  data: PriceInterface[];
  label: string;
}

const Price: React.FC<PriceProps> = ({ data, label }) => {
  const amounts = data.map(({ amount }) => amount);
  const options = {
    title: {
      text: label,
    },
    series: [
      {
        data: amounts,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Price;
