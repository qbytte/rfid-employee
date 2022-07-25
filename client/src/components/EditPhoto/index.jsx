import {FaCamera} from 'react-icons/fa'
import { useRef } from 'react';
import "./styles.css"

const EditPhoto = ({ imgUrl, onSubmitImg }) => {
  const fileRef = useRef(null);

  return (
    <div className="EditPhoto">
      <div className="EditPhoto-img">
        <img src={imgUrl} />
      </div>
      <label className="EditPhoto-btn">
        <FaCamera size={18} color="#343633" />
        <input
          className="EditPhoto-input-file"
          type="file"
          accept="image/png, image/jpeg"
          ref={fileRef}
          onChange={() => {
            onSubmitImg(fileRef.current.files[0])
          }}
        />
      </label>
    </div>
  );
};

export default EditPhoto;
