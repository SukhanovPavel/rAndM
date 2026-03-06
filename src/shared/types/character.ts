import type { TStatus } from '@/shared';

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: TStatus;
  image: string;
}
