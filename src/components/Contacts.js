import React from "react";
import myPhoto from '../photo.jpg'
import '../main.scss'

const Contacts = () => {
    return (
        <div className="container">
            <div className="contacts">
                <div className="contacts__info">
                    <a href="tel: +48668689567" className="contacts__phone">
                        +48 668 689 567
                    </a>
                    <div className="contacts__name">
                        Alexander <br />Pilipchuk
                    </div>
                    <a href="mailto: pilipchuk.alexanderbb@gmail.com" className="contacts__mail">
                        pilipchuk.alexanderbb@gmail.com
                    </a>
                    <span className="contacts__position">
                        FrontEnd Developer
                    </span>
                    <div className="contacts__skills">
                        HTML, CSS, SASS, JS, <span>React</span>, <span>Redux</span>
                    </div>
                </div>
                <div className="contacts__photo">
                    <img className="contacts__img" src={myPhoto} alt="photo"/>
                </div>
            </div>
        </div>
        
    )
}

export default Contacts