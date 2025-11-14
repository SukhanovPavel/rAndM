import { Link } from 'react-router';
import { LoadingComponent } from '@components';
import { ArrowBack } from '@/assets';

import styles from './ui.module.css';

export const CharacterInfo = () => {
  return (
    <div className={styles.character}>
      <Link
        to='/'
        id={'goBack'}
        className={styles.character__backLink}
      >
        <ArrowBack />
        GO BACK
      </Link>
      <LoadingComponent
        size='medium'
        text='Loading character card...'
      />
    </div>
  );
};
