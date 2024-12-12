import React from 'react'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import SelectsImg from '../selectsImg/SelectsImg'

import './SelectsStyles.css'

function Selects(){
    return (
        <div name ="views" className="selects">
            <div className="container">
                <SelectsImg bgImg={BoraBora} text='BoraBora' />
                <SelectsImg bgImg={BoraBora2} text='BoraBora2' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Maldives2} text='Maldives2' />
                <SelectsImg bgImg={Maldives3} text='Maldives3' />
                <SelectsImg bgImg={KeyWest} text='KeyWest' />
            </div>
        
        </div>
    )

}

export default Selects