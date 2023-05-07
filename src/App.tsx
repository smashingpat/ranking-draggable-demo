import characters from './characters';
import React from 'react';
import DraggableList from './components/DraggableList';
import CharacterCard from './components/CharacterCard';
import $ from './App.module.scss';
import Button from './components/Button';

function App() {
  const [pending, setPending] = React.useState(false);
  const [ranking, setRanking] = React.useState(characters);

  const sendRanking = async () => {
    if (pending) return;
    setPending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setRanking(characters); // reset state.
    setPending(false);
  };

  return (
    <div className={$.container}>
      <h1 className={$.title}>Power Ranger ranking</h1>
      <div className={$.listWrapper}>
        <div className={$.rankings}>
          {Array.from({ length: ranking.length }, (_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </div>
        <DraggableList
          className={$.list}
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
      <Button onClick={sendRanking} pending={pending}>
        Send results
      </Button>
    </div>
  );
}

export default App;
