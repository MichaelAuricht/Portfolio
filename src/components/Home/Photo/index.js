import './index.scss';
import PictureS from '../../../assets/images/profilephoto.jpg'

const Picture = () => {

    return (
        <div className='pic-container'>
            <img className='solid-pic' src={PictureS} alt="Michaelpic"/>
        </div>
    )

}

export default Picture