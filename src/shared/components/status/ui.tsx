import { AliveIcon, DeadIcon, UnknownIcon } from '@assets';

import statusStyles from './ui.module.css';

export const Status = ({
  status,
  label
}: {
  status?: 'Alive' | 'Dead' | 'Unknown';
  label?: string;
}) => {
  const currentStatus = (label as 'Alive' | 'Dead' | 'Unknown') || status;

  if (!currentStatus) {
    return null;
  }

  const icons = {
    Alive: <AliveIcon />,
    Dead: <DeadIcon />,
    Unknown: <UnknownIcon />
  };

  return (
    <div className={statusStyles.status}>
      <span>{currentStatus}</span>
      {icons[currentStatus]}
    </div>
  );
};
