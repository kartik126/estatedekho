import { CSSProperties } from '@material-ui/core/styles/withStyles';
import styles from './passwordStrengthMeter.module.css';

function getDisplayBarProperties(strength) {
  switch (strength) {
    case 1:
      return {
        className: styles.percent_20,
        style: {
          width: '20',
          color: '#32545A', //'#de1616',
        },
        text: 'Weak',
      };

    case 2:
      return {
        className: styles.percent_40,
        style: {
          width: '40',
          color: '#32545A', //'#de1616',
        },
        text: 'Weak',
      };

    case 3:
      return {
        className: styles.percent_60,
        style: {
          width: '60',
          color: '#32545A', //'#FFA200',
        },
        text: 'Could be stronger',
      };

    case 4:
      return {
        className: styles.percent_80,
        style: {
          width: '80',
          color: '#32545A', //'#06bf06',
        },
        text: 'Could be stronger',
      };

    case 5:
      return {
        className: styles.percent_100,
        style: {
          width: '100',
          color: '#32545A', //'#06bf06',
        },
        text: 'Strong password',
      };

    default:
      return {
        className: styles.percent_0,
        style: {
          width: '0',
          color: '#32545A', //'green'
        },
        text: '',
      };
  }
}

function getPasswordStrength(password = '') {
  let strength = 0;
  if (password.length >= 8) strength += 1;

  if (password.match(/(?=.*[0-9])/)) strength += 1;

  if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,])/)) strength += 1;

  if (password.match(/(?=.*[a-z])/)) strength += 1;

  if (password.match(/(?=.*[A-Z])/)) strength += 1;

  return getDisplayBarProperties(strength);
}

const PasswordStrengthMeter = (props) => {
  const { password, style, className, hideMeter, hideText, keepMounted } =
    props;
  const meterProperties = getPasswordStrength(password);
  const percent = meterProperties.className;
  if (!keepMounted && !password) return null;
  return (
    <div
      style={style || {}}
      className={`${className || ''} ${
        hideMeter && hideText ? 'd-none d-md-flex' : ''
      } ${styles.strength_meter_root}`}
    >
      <p style={meterProperties.style}>
        {hideText ? '' : meterProperties.text || ' '}&nbsp;
      </p>
      {hideMeter || !password ? null : (
        <ul className={`${styles.strength_meter} ${percent}`}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
