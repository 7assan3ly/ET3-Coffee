import React from 'react'
import './MakeCaffee.css'
import { FaCircle } from 'react-icons/fa';
import { TbRectangleVertical } from 'react-icons/tb';
import caffeeImg from '../../assets/images/image.png'


const MakeCaffee = () => {
  return (
    <div className='MakeCaffee'>
        <div className="caffeeLeft">
            <img className='caffeeImg' src={caffeeImg} alt='Caffee Image' />
            <TbRectangleVertical className='rectIcon' size={150} fill="#ee8c34" strokeWidth={0} />
            <FaCircle className='circleIcon' size={60} fill="#fdb921" />
        </div>

        <div className="caffeeRight">
            <hr className='firstHr' />
            <p className="caffeeTxt">
                Make Your <br /> Own Caffee
            </p>
            <hr className='secondHr' />
        </div>
    </div>
  )
}

export default MakeCaffee