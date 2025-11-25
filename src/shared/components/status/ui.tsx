import { AliveIcon, DeadIcon, UnknownIcon } from '@assets';

import statusStyles from './ui.module.css';

export const Status = ({
  status
}: {
  status: 'Alive' | 'Dead' | 'Unknown';
}) => {
  const icons = {
    Alive: <AliveIcon />,
    Dead: <DeadIcon />,
    Unknown: <UnknownIcon />
  };

  return (
    <div className={statusStyles.status}>
      <span>{status}</span>
      {icons[status]}
    </div>
  );
};
