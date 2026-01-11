import React from 'react';

import { cn } from '@/shared/helpers/classNames';

import styles from './ui.module.css';

type TextInputMode = 'bordered' | 'underlined';

interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  mode?: TextInputMode;
  iconLeft?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value = '',
  placeholder = '',
  onChange,
  mode = 'bordered',
  iconLeft,
  className,
  disabled,
  ...props
}) => {
  const showClear = Boolean(value && !disabled);

  return (
    <div
      className={cn(
        styles.textInput,
        {
          [styles.textInput_bordered]: mode === 'bordered',
          [styles.textInput_underlined]: mode === 'underlined',
          [styles.textInput_disabled]: disabled,
          [styles.textInput_withIcon]: Boolean(iconLeft)
        },
        [className]
      )}
    >
      {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}

      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      />

      {showClear && mode === 'bordered' && (
        <button
          type='button'
          className={styles.clearButton}
          onClick={() => onChange?.('')}
          aria-label='Очистить'
        >
          ×
        </button>
      )}
    </div>
  );
};
