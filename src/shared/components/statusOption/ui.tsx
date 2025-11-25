import { Status } from '@components';

export const StatusOption = ({ label }: { label?: string }) => {
  return <Status status={label as 'Alive' | 'Dead' | 'Unknown'} />;
};
