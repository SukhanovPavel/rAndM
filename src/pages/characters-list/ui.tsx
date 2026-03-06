import { useState } from 'react';
import { TopImage } from '@assets';
import { LoadingComponent } from '@components';
import type { ICharacter, TStatus } from '@shared';
import { Person } from '@widgets';

export const CharactersList = () => {
  const [character, setCharacter] = useState<ICharacter>({
    id: 1,
    name: 'Rick Sanchez',
    location: 'Earth',
    status: 'alive',
    gender: 'Male',
    species: 'Human',
    image: 'src/assets/forWidget.png'
  });

  const handleNameChange = (newName: string) => {
    setCharacter((prev) => ({ ...prev, name: newName }));
  };

  const handleLocationChange = (newLocation: string) => {
    setCharacter((prev) => ({ ...prev, location: newLocation }));
  };

  const handleStatusChange = (newStatus: TStatus) => {
    setCharacter((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div>
      <TopImage />
      <Person
        {...character}
        onNameChange={handleNameChange}
        onLocationChange={handleLocationChange}
        onStatusChange={handleStatusChange}
      />
      <LoadingComponent size='small' />
    </div>
  );
};
