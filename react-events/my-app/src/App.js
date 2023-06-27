import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(`Clicked button with text: ${text}`);
  }

  return (
    <div className="App">
      <CustomButton
        text="Button 1"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button 2"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button 3"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
