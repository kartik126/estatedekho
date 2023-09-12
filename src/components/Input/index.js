const Input = (props) => {
  const {
    leftIcon,
    rightIcon,
    label,
    rootStyle,
    leftIconStyle = {},
    rightIconStyle = {},
    rightIconOnClick,
    maxLength,
    inputProps,
  } = props;

  return (
    <>
      {label ? <p className="modal-label">{label}</p> : null}
      <div className="input" style={rootStyle || {}}>
        {leftIcon ? (
          <img
            src={leftIcon}
            alt="left icon"
            style={{
              position: 'absolute',
              left: 15,
              top: '50%',
              transform: 'translateY(-50%)',
              height: 10,
              cursor: 'pointer',
              ...leftIconStyle,
            }}
          />
        ) : null}
        <input
          maxLength={maxLength ? maxLength : 'none'}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          type={props.type}
          onKeyPress={props.onKeyPress ? props.onKeyPress : () => null}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            flex: 1,
            width: '100%',
            ...(leftIcon
              ? { paddingLeft: 30 }
              : rightIcon
              ? { paddingRight: 10 }
              : {}),
          }}
          {...(inputProps || {})}
        />
        {rightIcon ? (
          <img
            onClick={rightIconOnClick ? rightIconOnClick : () => null}
            src={rightIcon}
            alt="right icon"
            style={{
              position: 'absolute',
              right: 15,
              top: '50%',
              height: 10,
              cursor: 'pointer',
              transform: 'translateY(-50%)',
              ...rightIconStyle,
            }}
          />
        ) : null}
      </div>
    </>
  );
};

export default Input;
