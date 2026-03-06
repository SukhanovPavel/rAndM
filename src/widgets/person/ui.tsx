import { useState } from 'react';
import { Link } from 'react-router';
import { CloseIcon, ConfirmIcon, EditIcon } from '@assets';
import { Select, Status, TextInput } from '@components';
import { STATUS_OPTIONS } from '@constants';
import { useCharacterForm } from '@hooks';
import type { ICharacter, TStatus } from '@shared';

import styles from './ui.module.css';

export type Props = ICharacter & {
  onNameChange: (name: string) => void;
  onLocationChange: (location: string) => void;
  onStatusChange: (status: TStatus) => void;
};

export const Person = ({
  id,
  name: initialName,
  gender,
  species,
  location: initialLocation,
  status: initialStatus,
  image,
  onNameChange,
  onLocationChange,
  onStatusChange
}: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const {
    name,
    location,
    status,
    handleNameChange,
    handleLocationChange,
    handleStatusChange,
    resetForm
  } = useCharacterForm({
    initialName,
    initialLocation,
    initialStatus
  });

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleConfirm = () => {
    if (name !== initialName) onNameChange(name);
    if (location !== initialLocation) onLocationChange(location);
    if (status !== initialStatus) onStatusChange(status);
    setIsEdit(false);
  };

  const handleCancel = () => {
    resetForm();
    setIsEdit(false);
  };

  return (
    <div className={styles.personWidget}>
      <img
        className={styles.personWidget__image}
        src={image}
        alt={`${name} image`}
      />
      <dl className={styles.personWidget__description}>
        {isEdit ? (
          <TextInput
            value={name}
            onChange={handleNameChange}
            mode='underlined'
          />
        ) : (
          <Link to={`/character/${id}`}>{name}</Link>
        )}

        <dt>Gender</dt>
        <dd>{gender}</dd>

        <dt>Species</dt>
        <dd>{species}</dd>

        <dt>Location</dt>
        {isEdit ? (
          <TextInput
            value={location}
            onChange={handleLocationChange}
            mode='underlined'
            size='small'
          />
        ) : (
          <dd>{location}</dd>
        )}

        <dt>Status</dt>
        {isEdit ? (
          <Select<TStatus>
            options={STATUS_OPTIONS}
            value={status}
            onChange={handleStatusChange}
            size='small'
            SelectOptionContentComponent={Status}
          />
        ) : (
          <Status status={status} />
        )}
      </dl>
      <div className={styles.personWidget__controls}>
        {isEdit ? (
          <>
            <CloseIcon onClick={handleCancel} />
            <ConfirmIcon onClick={handleConfirm} />
          </>
        ) : (
          <EditIcon onClick={handleEdit} />
        )}
      </div>
    </div>
  );
};
