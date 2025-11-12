import LoadingIconL from '@assets/LoadingImageL.svg?react';
import LoadingIconS from '@assets/LoadingImageS.svg?react';

import styles from './ui.module.css';

type Props = {
  size: 'SMALL' | 'MEDIUM';
  text?: string;
};

export const LoadingComponent = ({ size, text }: Props) => {
  return (
    <>
      <div className={styles.loader}>
        {size === 'MEDIUM' && <LoadingIconL />}
        {size === 'SMALL' && <LoadingIconS />}
      </div>
      {size === 'MEDIUM' && text}
    </>
  );
};
