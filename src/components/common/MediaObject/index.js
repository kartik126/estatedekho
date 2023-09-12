import styles from './mediaObject.module.css';

const MediaObject = ({
  children,
  imageSrc,
  title,
  description,
  leadTitle,
  mediaActions,
  onClickAction,
}) => (
  <div className={styles.media_object_wrap}>
    <div className={styles.media_image_wrap}>
      <img src={imageSrc} alt="media" />
    </div>
    <div className={styles.media_body_wrap}>
      {leadTitle && <h5>{leadTitle}</h5>}
      <h1 className="mt-0">{title}</h1>
      {description && <p>{description}</p>}
      <div className={styles.media_image_wrap_mobile}>
        <img src={imageSrc} alt="media" />
      </div>
      {children}
      <div className={styles.media_actions_wrap}>
        {mediaActions &&
          mediaActions.length > 0 &&
          mediaActions.map((o, i) => (
            <button
              key={`media-action-${o.key}-${i}`}
              onClick={(e) => onClickAction(e, o)}
              className={`btn btn-default ${o.className || ''}`}
            >
              {o.label}
            </button>
          ))}
      </div>
    </div>
  </div>
);

export default MediaObject;
