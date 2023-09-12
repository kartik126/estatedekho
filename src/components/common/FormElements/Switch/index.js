import styles from './switch.module.css';

function getStyleVariant(key) {
  switch (key) {
    case 'circle2':
      return styles.circle_two;
    default:
      return '';
  }
}

export default function SwitchInput({
  children,
  labelSize,
  shape,
  checked,
  variant = '',
  style = {},
  onChange,
}) {
  return (
    <div
      style={style}
      className={`${styles.styled_checkbox_wrap} ${
        labelSize === 'big' ? styles.big_checkbox_input : ''
      } ${getStyleVariant(variant)} ${checked ? styles.checked : ''}`}
    >
      <label style={style} className={styles.switch_input}>
        <input type="checkbox" onChange={onChange} checked={!!checked} />
        <span
          className={`${styles.switch_slide_shape} ${
            shape === 'box' ? '' : styles.round
          }`}
        ></span>
      </label>
      {children}
    </div>
  );
}
