import React, { useEffect } from 'react';
import styles from './styledinput.module.css';

export const RequiredIndicator = () => (
  <span className={`${styles.field_required_after}`}></span>
);

export const getErrorMessage = (error, id) => {
  if (error) {
    if (typeof error === 'object') {
      return error[id] ? error[id] || '' : error.message || '';
    }
    return error;
  }
  return '';
};

export const ErrorWrap = ({
  error,
  id,
  children,
  className = '',
  style,
  shouldReCenterOnError,
}) => {
  const errorMessage = getErrorMessage(error, id);
  const ref = React.createRef();
  useEffect(() => {
    if (
      ref &&
      ref.current &&
      ref.current.scrollIntoView &&
      errorMessage &&
      shouldReCenterOnError !== false
    ) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [errorMessage]);
  return (
    <div
      ref={ref}
      style={{ position: 'relative', ...(style || {}) }}
      className={errorMessage ? styles.has_error : ''}
    >
      {children || null}
      {errorMessage && (
        <p
          className={`text-danger mb-0 mt-0 ${styles.input_error_msg} ${
            className || ''
          }`}
        >
          {errorMessage}&nbsp;
        </p>
      )}
    </div>
  );
};

export const StyledInputLabelWrap = ({
  id,
  className,
  labelClass,
  variant,
  label,
  required,
  children,
}) => {
  const inputvariant = variant || '';
  return (
    <div
      className={`${styles.styled_input} ${className ? className : ''}`}
      data-style-variant={inputvariant}
    >
      {label ? (
        <label
          htmlFor={`${id}`}
          className={`${labelClass || ''} ${
            required ? styles.field_required_after : ''
          }`}
        >
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
};

const StyledInput = ({
  label,
  id,
  children,
  error,
  className,
  variant,
  required,
}) => {
  return (
    <StyledInputLabelWrap
      id={id}
      className={className}
      variant={variant}
      label={label}
      required={required}
    >
      <ErrorWrap error={error} id={id}>
        <div id={`#${id}`} className={styles.styled_input_wrap}>
          {children}
        </div>
      </ErrorWrap>
    </StyledInputLabelWrap>
  );
};

export default StyledInput;
