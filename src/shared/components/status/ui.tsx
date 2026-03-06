import { AliveIcon, DeadIcon, UnknownIcon } from '@assets';
import type { TStatus } from '@shared';

import statusStyles from './ui.module.css';

interface StatusProps {
  status?: TStatus;
  label?: string;
}

export const Status = ({ status, label }: StatusProps) => {
  const currentStatus = (label?.toLowerCase() as TStatus) || status;

  if (!currentStatus) {
    return null;
  }

  const icons = {
    alive: <AliveIcon />,
    dead: <DeadIcon />,
    unknown: <UnknownIcon />
  };

  const displayStatus =
    currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1);

  return (
    <div className={statusStyles.status}>
      <span>{displayStatus}</span>
      {icons[currentStatus]}
    </div>
  );
};
