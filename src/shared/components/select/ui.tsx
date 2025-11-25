import React, { useEffect, useMemo, useRef, useState } from 'react';

import selectStyles from './ui.module.css';

export interface SelectOptionContentProps {
  value: string;
}

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.value}</>;
};

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: 'sm' | 'lg';
  className?: string;
  SelectOptionContentComponent?: React.FC<SelectOptionContentProps>;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = '',
  size = 'lg',
  className = '',
  SelectOptionContentComponent = DefaultSelectOptionContent
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleClick = () => setIsOpen(false);

  const optionsList = useMemo(() => {
    return options.map((option) => {
      return (
        <div
          key={option.value}
          className={`${selectStyles.select__option} ${selectStyles[size]}`}
          onClick={() => {
            onChange(option.label);
            setIsOpen(false);
          }}
        >
          <SelectOptionContentComponent value={option.label} />
        </div>
      );
    });
  }, [options, onChange, SelectOptionContentComponent, size]);

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
          {value ? (
            <SelectOptionContentComponent value={value} />
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
        <div
          onClick={handleClick}
          className={selectStyles.select__dropdown}
        >
          {optionsList}
        </div>
      )}
    </div>
  );
};
