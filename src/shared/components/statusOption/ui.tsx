import { Status } from '@components';

export const StatusOption = ({ value }: { value: string }) => {
  return <Status status={value as 'Alive' | 'Dead' | 'Unknown'} />;
};