import { useState } from 'react';
import Swal from 'sweetalert2';
import {
  checkFileSize,
  checkFileType,
  readFile,
} from '../../../../utils/fileUpload';
import styles from './imageSelect.module.css';

function UploadedImage({ src, onRemove, index }) {
  return (
    <div className={styles.uploaded_image}>
      <img src={src || ''} alt="uploaded image" />
      {onRemove && typeof onRemove === 'function' && (
        <button
          type="button"
          onClick={(e) => onRemove(e, src, index)}
          className={styles.image_remove_btn}
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="close">
              <line
                id="Line 53"
                x1="20.9043"
                y1="1.14652"
                x2="1.09147"
                y2="20.9594"
                stroke="currentColor"
              />
              <line
                id="Line 54"
                x1="1.09183"
                y1="0.439415"
                x2="20.9047"
                y2="20.2523"
                stroke="currentColor"
              />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}

export default function UploadImage({
  onSelectImage,
  images,
  onRemoveImage,
}) {
  const [fileDetails, setFileDetails] = useState({
    fileName: '',
    fileType: '',
    size: '',
  });
  const [loading, setLoading] = useState(false);
  const [inputKey, setInputKey] = useState(0);
  const uploadedImagesArray = images && images.length ? images : [];
  const onFileChange =
    onSelectImage && typeof onSelectImage === 'function'
      ? onSelectImage
      : () => undefined;
  const incrementKey = () => {
    setInputKey(inputKey + 1);
  };
  return (
    <div className={styles.image_upload_root}>
      <div className={styles.uploaded_images}>
        {uploadedImagesArray.map((imgUrl, index) => (
          <UploadedImage
            key={`${index}+uploaded-image-${imgUrl}`}
            index={index}
            src={imgUrl}
            onRemove={onRemoveImage}
          />
        ))}
      </div>
      <div className={styles.image_upload}>
        <input
          key={`input-${inputKey}`}
          type="file"
          accept="image/*"
          onChange={async (e) => {
            try {
              setLoading(true);
              incrementKey();
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                const ext = `.${file.name.substring(
                  file.name.lastIndexOf('.') + 1
                )}`;
                if (checkFileType(ext) && checkFileSize(file) <= 5) {
                  const imageDataUrl = await readFile(file);
                  setFileDetails({
                    fileName: file.name,
                    fileType: file.type,
                    size: `${checkFileSize(file)} MB`,
                  });
                  //call on select file
                  const p = onFileChange(e, imageDataUrl, file);
                  if (p && p.then) {
                    p.then(() => {
                      setLoading(false);
                    }).catch(() => {
                      setLoading(false);
                    });
                  } else {
                    setLoading(false);
                  }
                } else {
                  setLoading(false);
                  Swal.fire({
                    title: '',
                    icon: 'error',
                    showCloseButton: true,
                    cancelButtonText: 'Ok',
                    html: !checkFileType(ext)
                      ? 'File Type is not Supported'
                      : 'The file size can not exceed 5MB',
                  });
                }
              } else {
                setLoading(false);
                onFileChange(e, '', null);
              }
            } catch (error) {
              console.log(error);
              setLoading(false);
            }
          }}
        />
        {loading && onFileChange ? (
          <div className={styles.uploading_loading}>
            <i className="fa fa-spinner fa-pulse"></i>
          </div>
        ) : null}
        <svg
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons/Upload">
            <g id="Group 9">
              <path
                id="Stroke 1"
                d="M30.2158 17.6919H31.8908C33.0098 17.6919 33.9178 18.5619 33.9178 19.6349V32.7039C33.9178 33.7769 33.0098 34.6479 31.8908 34.6479H17.7018C16.5828 34.6479 15.6758 33.7769 15.6758 32.7039V19.6349C15.6758 18.5619 16.5828 17.6919 17.7018 17.6919H19.2708"
                stroke="#01272F"
              />
              <path
                id="Stroke 3"
                d="M21.4204 17.1748L24.7014 13.8938L27.9824 17.1748"
                stroke="#01272F"
              />
              <path
                id="Stroke 5"
                d="M24.7017 14.0938V24.8837"
                stroke="#01272F"
              />
              <path
                id="Stroke 7"
                d="M31.5336 16.1064H33.4646C34.7556 16.1064 35.8006 17.1324 35.8006 18.3989V33.814C35.8006 35.0804 34.7556 36.1064 33.4646 36.1064H25.2866"
                stroke="#01272F"
                strokeDasharray="1 1"
              />
            </g>
          </g>
        </svg>
      </div>
      {fileDetails && fileDetails.fileName && !(typeof images != 'undefined') && (
        <div className={styles.file_details}>
          <p>
            Name:&nbsp;&nbsp;<strong>{fileDetails.fileName}</strong>
          </p>
          <p>
            Type:&nbsp;&nbsp;<strong>{fileDetails.fileType}</strong>
          </p>
          <p>
            Size:&nbsp;&nbsp;<strong>{fileDetails.size}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
