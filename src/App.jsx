import { useState } from 'react';
const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = color === selectedColor;
  return (
    <div
      className={`${color} ${isSelected ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {' '}
        <Color
          color="yellow"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="black"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;
