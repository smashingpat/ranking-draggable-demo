import $ from './CharacterCard.module.scss';

type Props = {
  name: string;
  image: string;
};

export default function CharacterCard({ name, image }: Props) {
  return (
    <div className={$.container}>
      <img className={$.image} src={image} />
      <h2 className={$.name}>{name}</h2>
    </div>
  );
}
