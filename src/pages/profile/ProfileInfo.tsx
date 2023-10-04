import React from 'react'
import {FC} from 'react'

import s from './Profile.styled'

interface IProfileHeader {
}

export const ProfileInfo: FC<IProfileHeader> = (props) => {
   return (
      <s.ProfileInfo>
         <div className={'img-wrapper'}>
            <img
               src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
               alt="bg"
            />
         </div>
         <div>ava + description</div>
      </s.ProfileInfo>
   )
}