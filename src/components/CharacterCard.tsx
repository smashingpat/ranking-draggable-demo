import React from 'react';
import $ from './CharacterCard.module.scss';

type Props = {
  name: string;
  image: string;
};

export default function CharacterCard({ name, image }: Props) {
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setAnimate(false);
    }, 305);

    return () => {
      clearTimeout(id);
    };
  }, [1, 2]);

  return (
    <div
      className={[$.container, animate && $.isAnimating]
        .filter(Boolean)
        .join(' ')}
    >
      <img className={$.image} src={image} />
      <h2 className={$.name}>{name}</h2>
    </div>
  );
}
