import React, { useEffect, useRef, useState } from 'react';

import selectStyles from './ui.module.css';

export interface SelectOptionContentProps {
  label: string;
}

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.label}</>;
};

export interface Option<T> {
  value: T;
  label: string;
}

interface SelectProps<T> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  size?: 'small' | 'large';
  className?: string;
  SelectOptionContentComponent?: React.FC<SelectOptionContentProps>;
}

export const Select = <T extends string>({
  options,
  value,
  onChange,
  placeholder = '',
  size = 'large',
  className = '',
  SelectOptionContentComponent = DefaultSelectOptionContent
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const toggleOpen = () => setIsOpen((p) => !p);

  const optionsList = options.map((option) => {
    return (
      <div
        key={option.value}
        className={`${selectStyles.select__option} ${selectStyles[size]}`}
        onClick={() => {
          onChange(option.value);
          setIsOpen(false);
        }}
      >
        <SelectOptionContentComponent label={option.label} />
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className={`${selectStyles.selectWrapper} ${className}`}
    >
      <div
        className={`${selectStyles.select} ${selectStyles[size]}`}
        onClick={toggleOpen}
      >
        <div className={selectStyles.select__headerWrapper}>
          {value && selectedOption ? (
            <SelectOptionContentComponent label={selectedOption.label} />
          ) : (
            <span className={selectStyles.select__placeholder}>
              {placeholder}
            </span>
          )}
        </div>
        {isOpen ? (
          <span className={selectStyles.select__arrowUp} />
        ) : (
          <span className={selectStyles.select__arrowDown} />
        )}
      </div>

      {isOpen && (
        <div className={selectStyles.select__dropdown}>{optionsList}</div>
      )}
    </div>
  );
};
