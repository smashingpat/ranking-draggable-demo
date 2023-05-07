import characters from './characters';
import React from 'react';
import DraggableList from './components/DraggableList';
import CharacterCard from './components/CharacterCard';
import $ from './App.module.scss';

function App() {
  const [ranking, setRanking] = React.useState(characters);

  return (
    <div className={$.container}>
      <h1 className={$.title}>Power Ranger ranking</h1>
      <div className={$.list}>
        <div className={$.rankings}>
          {Array.from({ length: ranking.length }, (_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </div>
        <DraggableList
          items={ranking}
          onChange={setRanking}
          render={({ item, isDragging }) => (
            <div
              className={[$.listItem, isDragging && $.isDragging]
                .filter(Boolean)
                .join(' ')}
            >
              <CharacterCard name={item.name} image={item.image} />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default App;
