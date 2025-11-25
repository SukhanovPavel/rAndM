import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowBack } from '@assets';
import { CustomSelect, LoadingComponent, StatusOption } from '@components';

import styles from './ui.module.css';

export const CharacterInfo = () => {
  const [value, setValue] = useState<string>('Alive');

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
      <CustomSelect
        options={[
          { label: 'Alive', value: 'alive' },
          { label: 'Dead', value: 'dead' },
          { label: 'Unknown', value: 'unknown' }
        ]}
        onChange={setValue}
        value={value}
        size='sm'
        SelectOptionContentComponent={StatusOption}
      />
      <LoadingComponent
        size='medium'
        text='Loading character card...'
      />
    </div>
  );
};
