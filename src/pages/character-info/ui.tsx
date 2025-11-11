import { Link } from 'react-router';
import { LoadingComponent } from '@components';
import ArrowBack from '@assets/arrow_back_24px.svg';

import styles from './ui.module.css';

export const CharacterInfo = () => {
  return (
    <div className={styles._}>
      <Link
        to='/'
        id={'goBack'}
        className={styles.backLink}
      >
        <ArrowBack />
        GO BACK
      </Link>
      <LoadingComponent
        size={'MEDIUM'}
        text={'Loading character card...'}
      />
    </div>
  );
};
