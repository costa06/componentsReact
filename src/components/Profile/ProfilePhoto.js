import React from 'react';
import profil from './profil.jpg';

const Profilephoto = () => {
    return (
       <>
         <div className='mon-profil'>
            <img src={profil} alt='Tarek Touati' />
        </div>
       </>
    );
}

export default Profilephoto;
