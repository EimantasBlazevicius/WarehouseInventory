import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PriceInterface } from "../../../App";

export interface PriceProps {
  data: PriceInterface[];
  label: string;
}

const Price: React.FC<PriceProps> = ({ data, label }) => {
  const amounts = data.map(({ amount, date }) => ({
    y: amount,
    x: new Date(date).getTime(),
  }));
  const options = {
    title: {
      text: label,
    },
    xAxis: {
      type: "datetime",
      // max: amounts[amounts.length - 1].x,
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
