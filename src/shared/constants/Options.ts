import type { Option } from '@components';
import type { TStatus } from '@shared';

export const STATUS_OPTIONS: Option<TStatus>[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
];
