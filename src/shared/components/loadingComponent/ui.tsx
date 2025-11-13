import { LoadingIconL, LoadingIconS } from '@assets';

import styles from './ui.module.css';

type Props = {
  size: 'small' | 'medium';
  text?: string;
};

export const LoadingComponent = ({ size, text }: Props) => {
  return (
    <>
      <div className={styles.loader}>
        {size === 'medium' && <LoadingIconL />}
        {size === 'small' && <LoadingIconS />}
      </div>
      {size === 'medium' && text}
    </>
  );
};
