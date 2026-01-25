import { AliveIcon, DeadIcon, UnknownIcon } from '@assets';
import type { TStatus } from '@shared';

import statusStyles from './ui.module.css';

interface StatusProps {
  status?: TStatus;
  label?: string;
}

export const Status = ({ status, label }: StatusProps) => {
  const currentStatus = (label as TStatus) || status;

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
