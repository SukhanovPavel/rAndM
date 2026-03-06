import { useState } from 'react';
import type { TStatus } from '@shared';

interface IUseCharacterFormProps {
  initialName?: string;
  initialLocation?: string;
  initialStatus?: TStatus;
}

export const useCharacterForm = ({
  initialName = '',
  initialLocation = '',
  initialStatus = 'alive'
}: IUseCharacterFormProps) => {
  const [name, setName] = useState<string>(initialName);
  const [location, setLocation] = useState<string>(initialLocation);
  const [status, setStatus] = useState<TStatus>(initialStatus);

  const handleNameChange = (value: string) => setName(value);
  const handleLocationChange = (value: string) => setLocation(value);
  const handleStatusChange = (value: TStatus) => setStatus(value);

  const resetForm = () => {
    setName(initialName);
    setLocation(initialLocation);
    setStatus(initialStatus);
  };

  return {
    name,
    location,
    status,
    handleNameChange,
    handleLocationChange,
    handleStatusChange,
    resetForm
  };
};
