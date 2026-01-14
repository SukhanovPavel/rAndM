import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowBack, SearchIcon } from '@assets';
import { TextInput } from '@components';

import styles from './ui.module.css';

export const CharacterInfo = () => {
  const [testValue, setTestValue] = useState<string>('Rick Sanchez');
  const [testValue2, setTestValue2] = useState<string>('Some character');

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '250px',
          marginLeft: '40%'
        }}
      >
        <TextInput
          mode='underlined'
          value={testValue}
          onChange={setTestValue}
        />
        <TextInput
          mode='bordered'
          value={testValue2}
          onChange={setTestValue2}
          iconLeft={<SearchIcon />}
          placeholder='Filter by name...'
        />
      </div>
    </div>
  );
};
