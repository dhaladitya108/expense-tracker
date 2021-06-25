import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return <div className="char">
        {props.dataPoints.map(dataPoint => <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.lable} />)}
    </div>
}

export default Chart;