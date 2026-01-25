import type { Option } from '@components';
import type { TStatus } from '@shared';

export const STATUS_OPTIONS: Option<TStatus>[] = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'Unknown' }
];
