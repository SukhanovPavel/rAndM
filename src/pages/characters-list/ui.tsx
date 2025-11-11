import TopImage from '@assets/topImage.svg';
import { LoadingComponent } from '@components';

export const CharactersList = () => {
  return (
    <div>
      <TopImage />
      <LoadingComponent
        size={'MEDIUM'}
        text={'Loading characters...'}
      />
      <LoadingComponent size={'SMALL'} />
    </div>
  );
};
