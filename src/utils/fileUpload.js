import apiClient from './apiClient';
import { FILE_UPLOAD } from './constant';

const validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];

const getBlob = async (fileUri) => {
  const resp = await fetch(fileUri);
  const imageBody = await resp.blob();
  return imageBody;
};

export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.addEventListener('error', () =>
      reject(new Error('unable to read file'))
    );
    reader.readAsDataURL(file);
  });
};

export const uploadFile = async (
  fileType,
  fileUri,
  fileTag,
  fileName = ''
) => {
  try {
    const imageBlob = await getBlob(fileUri);
    const base64String = await readFile(imageBlob);
    if (typeof base64String === 'string' && base64String != '') {
      const request = {
        base64String: base64String.split('base64,')[1],
        fileName,
        contentType: fileType,
      };
      const response = await apiClient.post(FILE_UPLOAD, request, true);
      if (response.statusCode == '200' && response.body.Location) {
        return response.body.Location;
      }
    }
    return '';
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const checkFileType = (fileName) => {
  return !!validFileExtensions.includes(fileName.toLowerCase());
};

export const checkFileSize = (file) => {
  return parseFloat((file.size / 1024 / 1024).toFixed(2)); // in MB;
};
