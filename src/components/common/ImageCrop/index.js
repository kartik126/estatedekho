import React, { useState, useCallback, useEffect } from 'react';
import { Row, Col, Modal, Button, Image } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import getCroppedImg from 'utils/cropImage';
import { checkFileSize, checkFileType, readFile } from 'utils/fileUpload';
import Swal from 'sweetalert2';
import moment from 'moment';

const getImageName = (src = '') => {
  try {
    const fullName = src.split('/').pop();
    if (fullName) {
      return fullName;
    }
    return 'img-' + moment().unix().toString();
  } catch (error) {
    return 'img-' + moment().unix().toString();
  }
};

const getImageType = (src = '') => {
  try {
    const fullName = src.split('/').pop();
    const ext = `${fullName.substring(fullName.lastIndexOf('.') + 1)}`;
    if (ext && checkFileType('.' + ext)) {
      return `image/${ext.toLowerCase()}`;
    }
    return 'image/png';
  } catch (error) {
    console.error(error);
    return 'image/png';
  }
};

export const ImageCropper = (props) => {
  const { imgSrc, shouldUpdate, cropRatio, onChange } = props;

  const [image, setImage] = useState(imgSrc || null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imageName, setImageName] = useState(getImageName(imgSrc));
  const [imageType, setImageType] = useState(getImageType(imgSrc));
  const [, setCroppedArea] = useState(0);
  const [, setCroppedAreaPixels] = useState(null);
  const [, setCroppedImage] = useState(null);

  const onReset = () => {
    setZoom(1);
    setRotation(0);
    setCrop({ x: 0, y: 0 });
    setImage('');
    // onChangeCropData(null, 'reset');
    setImageName('');
    setImageType('');
  };

  useEffect(() => {
    const name = getImageName(imgSrc);
    const type = getImageType(imgSrc);

    setImageName(name);
    setImageType(type);
    setImage(imgSrc);

    onChange({
      origin: imgSrc,
      image: imgSrc,
      name,
      type,
      zoom: 1,
      rotation: 0,
    });

    return () => {
      onReset();
    };
  }, [imgSrc, shouldUpdate]);

  const onChangeCropData = (cropped, fromPlace) => {
    setCroppedImage(cropped);
    onChange({
      origin: image,
      image: cropped,
      name: imageName,
      type: imageType,
      zoom,
      rotation,
    });
  };

  const onCropAreaChange = async (cArea, croppedAreaPixels) => {
    try {
      if (image && croppedAreaPixels && !isNaN(croppedAreaPixels.x)) {
        const croppedImg = await getCroppedImg(
          image,
          croppedAreaPixels,
          rotation
        );
        setCroppedImage(croppedImg);
        onChangeCropData(croppedImg, 'crop change');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onCropComplete = useCallback(
    (cArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
      setCroppedArea(cArea);
      onCropAreaChange(cArea, croppedAreaPixels);
    },
    [imgSrc, image, rotation, zoom]
  );

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const ext = `.${file.name.substring(
        file.name.lastIndexOf('.') + 1
      )}`;
      if (checkFileSize(file) <= 5 && checkFileType(ext)) {
        const imageDataUrl = await readFile(file);
        setImage(imageDataUrl);
        setImageName(file.name);
        setImageType(file.type);
      } else {
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
    }
  };

  const onRemoveFile = () => {
    onReset();
  };

  return (
    <Row>
      <Col>
        <div
          className="file-upload-wrapper"
          style={{
            width: '100%',
            borderRadius: 0,
          }}
        >
          {!image ? (
            <>
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: 10,
                  borderRadius: 5,
                  zIndex: 1,
                  backgroundColor: '#fff',
                }}
                src={'/images/icon-upload.svg'}
                alt="default-no-image icon"
              />
              <input
                type="file"
                onChange={onFileChange}
                accept="image/*"
                className="image-upload-container"
              />
            </>
          ) : (
            <img
              src={'/images/cross.svg'}
              alt="cross-icon"
              className="cross-icon-crop"
              onClick={() => onRemoveFile()}
            />
          )}
          <Cropper
            style={{
              containerStyle: {
                width: '100%',
                height: 200,
                position: 'relative',
                margin: 'auto',
                marginTop: 0,
                borderRadius: 20,
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: '#99A9AC',
                backgroundColor: '#99A9AC',
              },
              cropAreaStyle: {
                // padding: 0,
                // minWidth: '100%',
                // minHeight: 200,
                zIndex: 1,
              },
              mediaStyle: {
                padding: 0,
                maxHeight: '100%',
                height: '100%',
              },
            }}
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={cropRatio || 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
          />
        </div>
        <Row style={{ margin: `20px auto`, justifyContent: 'center' }}>
          <div className="controls">
            <Col>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => {
                  if (image) {
                    setZoom(zoom);
                  }
                }}
              />
              <p className="slider-title">{'Zoom'}</p>
            </Col>
          </div>
          <div className="controls">
            <Col>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotate"
                onChange={(e, rotation) => {
                  if (image) {
                    setRotation(rotation);
                  }
                }}
              />
              <p className="slider-title">{'Rotation'}</p>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

const ImageCropperModal = (props) => {
  const {
    imgSrc,
    open,
    onClose,
    onSubmit,
    title,
    outputAspectRatio,
    children,
    cancelButtonLabel,
    saveButtonLabel,
  } = props;

  const defaultImageData = {
    image: imgSrc || null,
    name: 'temp',
    type: 'image/png',
  };

  const [imageData, setImageData] = useState(defaultImageData);

  const onChange = ({ image, name, type }) => {
    setImageData({
      image,
      name,
      type,
    });
  };

  const onCancel = () => {
    onClose();
  };

  const onSave = async () => {
    try {
      if (imageData && imageData.image) {
        await onSubmit(imageData);
        onClose();
      }
    } catch (error) {
      console.log(error);
      onClose();
    }
  };

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="modal-header"
            style={{ fontSize: 24, marginLeft: 25 }}
          >
            {title || 'Logo'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <ImageCropper
            imgSrc={imgSrc}
            onChange={onChange}
            cropRatio={outputAspectRatio}
            shouldUpdate={open}
          />
          {children || ''}
        </Modal.Body>
        <Modal.Footer className="align-items-center justify-content-center modal-body">
          <Button
            className="modal-cancel-btn"
            variant="secondary"
            onClick={onCancel}
          >
            {cancelButtonLabel || 'Cancel'}
          </Button>
          <Button
            disabled={!imageData || !imageData.image}
            className="modal-save-btn"
            variant="primary"
            style={
              !Image ? { backgroundColor: '#ddd', borderColor: '#ddd' } : {}
            }
            onClick={onSave}
          >
            {saveButtonLabel || 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageCropperModal;
