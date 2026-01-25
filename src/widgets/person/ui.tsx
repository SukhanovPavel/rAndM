import { useState } from 'react';
import { Link } from 'react-router';
import { CloseIcon, ConfirmIcon, EditIcon } from '@assets';
import { Select, Status, TextInput } from '@components';
import { STATUS_OPTIONS } from '@constants';
import type { TStatus } from '@shared';

import styles from './ui.module.css';

export type Props = {
  id: number;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: 'Alive' | 'Dead' | 'Unknown';
  image: string;
  handleNameChange: (name: string) => void;
  handleLocationChange: (location: string) => void;
  handleStatusChange: (status: TStatus) => void;
};

export const Person = ({
  id,
  name,
  gender,
  species,
  location,
  status,
  image,
  handleNameChange,
  handleLocationChange,
  handleStatusChange
}: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleConfirm = () => {
    setIsEdit(false);
  };

  const handleCancel = () => {
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
