import LoadingIconL from '@assets/LoadingImageL.svg';
import LoadingIconS from '@assets/LoadingImageS.svg';

import styles from './ui.module.css';

type Props = {
  size: 'SMALL' | 'MEDIUM';
  text?: string;
};

export const LoadingComponent = ({ size, text }: Props) => {
  return (
    <>
      <div className={styles._}>
        {size === 'MEDIUM' && <LoadingIconL />}
        {size === 'SMALL' && <LoadingIconS />}
      </div>
      {size === 'MEDIUM' && text}
    </>
  );
};
