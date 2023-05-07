import React from 'react';
import $ from './Button.module.scss';

type Props = React.PropsWithChildren<{
  onClick?: () => void;
  pending?: boolean;
}>;

export default function Button({ children, onClick, pending }: Props) {
  return (
    <button
      className={[$.button, pending && $.isPending].filter(Boolean).join(' ')}
      type="button"
      onClick={onClick}
      disabled={pending}
    >
      <span className={$.inner}>{children}</span>
    </button>
  );
}
