import React from 'react'
import Observer from './effects/Observer'

export default function Footer(){
    const [ref, isVisible] = Observer(0.01);
    return (
        <section className={`footer-sec ${isVisible ? 'show-sec' : ''}`} id='footer-sec'>
            <div className='footer-wrap'>
                <div className='footer-container'>
                    <div className='footer-header'>
                        © Copyright Echo All Rights Reserved
                    </div>
                    <div className='footer-desc'>
                        Designed by Jericho Mosqueda     
                    </div>
                </div>
            </div>
        </section>
    )
}