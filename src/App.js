import React from 'react';
import { dataSource } from './data.js';

import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector
} from 'devextreme-react/pie-chart';

class App extends React.Component {

  render() {
    return (
      <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title=" Revenue Report"
      >
        <Legend
          orientation="verticle"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="left"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="Name" valueField="Revenue">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={24} />
            <Connector visible={true} width={5.5} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default App;



