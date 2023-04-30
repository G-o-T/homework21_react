import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Население", "человек"],
  ["Мужчины, проживающие в сельской местности", 968128],
  ["Мужчины, проживающие в городах", 3310360],
  ["Женщины, проживающие в сельской местности", 1055301],
  ["Женщины, проживающие в городах", 3921735],
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Численность населения Беларуси - 2022</h1>
      </header>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
    />
    </div>
  );
}

export default App;
