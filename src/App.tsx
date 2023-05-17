import characters from './characters';
import React from 'react';
import DraggableList from './components/DraggableList';
import CharacterCard from './components/CharacterCard';
import $ from './App.module.scss';
import Button from './components/Button';

function App() {
  const [copy, setCopy] = React.useState(() => [...characters]);
  const [pending, setPending] = React.useState(false);
  const [ranking, setRanking] = React.useState(() => copy.splice(0, 3));
  const addCharacter = () => {
    const nextCharacter = copy.splice(0, 1)[0];
    if (nextCharacter) {
      setRanking([...ranking, nextCharacter]);
    }
  };

  const sendRanking = async () => {
    if (pending) return;
    setPending(true);
    await new Promise((r) => setTimeout(r, 1000));
    const copy = [...characters];
    setRanking(copy.splice(0, 3)); // reset state.
    setCopy(copy);
    setPending(false);
  };

  return (
    <div className={$.container}>
      <h1 className={$.title}>
        <button type="button" onClick={addCharacter}>
          Mijn ranking
        </button>
      </h1>
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
      <div className={$.bottom}>
        <Button onClick={sendRanking} pending={pending}>
          Insturen
        </Button>
      </div>
    </div>
  );
}

export default App;
