import Timer from './components/Timer'

function App() {
  return (
    <div className='App'>
      <Timer s={60}/>
      <Timer s={30}/>
    </div>
  );
}

export default App;