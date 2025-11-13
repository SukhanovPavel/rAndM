import { TopImage } from '@assets';
import { LoadingComponent } from '@components';

export const CharactersList = () => {
  return (
    <div>
      <TopImage />
      <LoadingComponent
        size='medium'
        text='Loading characters...'
      />
      <LoadingComponent size='small' />
    </div>
  );
};
