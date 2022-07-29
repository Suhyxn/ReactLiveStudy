import Clock from './components/Clock'

function App() {
  return (
    <div>
      <Clock timezone='Asia/Seoul' newTz='Asia/Taipei'/>
      <Clock timezone='Asia/Taipei' newTz='Asia/Seoul'/>
    </div>
  );
}

export default App;