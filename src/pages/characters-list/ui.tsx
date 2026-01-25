import { useState } from 'react';
import { TopImage } from '@assets';
import { LoadingComponent } from '@components';
import type { TStatus } from '@shared';
import { Person } from '@widgets';

export const CharactersList = () => {
  const [personName, setPersonName] = useState<string>('Rick Sanchez');
  const [personLocation, setPersonLocation] = useState<string>('Earth');
  const [personStatus, setPersonStatus] = useState<TStatus>('Alive');

  const handleNameChange = (value: string) => {
    setPersonName(value);
  };

  const handleLocationChange = (value: string) => {
    setPersonLocation(value);
  };

  const handleStatusChange = (value: TStatus) => {
    setPersonStatus(value);
  };

  return (
    <div>
      <TopImage />
      <Person
        name={personName}
        id={1}
        image='src/assets/forWidget.png'
        gender='Male'
        status={personStatus}
        location={personLocation}
        species='Human'
        handleNameChange={handleNameChange}
        handleLocationChange={handleLocationChange}
        handleStatusChange={handleStatusChange}
      />
      <LoadingComponent size='small' />
    </div>
  );
};
