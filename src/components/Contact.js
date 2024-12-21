import React from 'react'
import Observer from './effects/Observer'
import EmailService from './functions/EmailService';

export default function Contact (){
    const [ref, isVisible] = Observer(0.01);
    const [emailref, sendEmail] = EmailService(); 
    return (
        <section className={`contact-sec ${isVisible ? 'show-sec' : ''}`} ref={ref} id="contact-sec">
            <div className="contact-wrap">
                <div className="contact-container">
                    <h2 className="contact-title">
                        Contact
                    </h2>
                    <div className='contact-view'>
                        <div className='contact-tab'>
                            <div className='contact-info'>
                                <div title='Phone Number' className='info-list'>
                                    <div className='info-icon' data-feather="phone"></div>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div className='info-desc paragraphs'>
=======
                                    <div className='info-desc'>
>>>>>>> parent of 95d4430 (Updates)
=======
                                    <div className='info-desc'>
>>>>>>> parent of 63b650a (changes on portfolio)
                                        <div className='desc-title'>Call Us</div>
                                        +639487221139
                                    </div>
                                    
                                </div>
                                <div title='Email Address' className='info-list'>
                                    <div className='info-icon' data-feather="mail"></div>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div className='info-desc paragraphs'>
=======
                                    <div className='info-desc'>
>>>>>>> parent of 95d4430 (Updates)
=======
                                    <div className='info-desc'>
>>>>>>> parent of 63b650a (changes on portfolio)
                                        <div className='desc-title'>Email Us</div>
                                        <a href="mailto:officialjerichom@gmail.com" className='email-link'> officialjerichom@gmail.com</a>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='contact-map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15447.435534933244!2d121.18249195!3d14.550061249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1733025462511!5m2!1sen!2sph" width="400" height="300" title="Map" 
                                style={{border : "0", borderRadius: "10px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <form className='contact-form' ref={emailref} onSubmit={sendEmail} >
                            <div className='form-title'>Message Us</div>
                            <div className='form-fields'>
                                <input className='form-split' name="form_name" placeholder='Name' required  />
                                <input className='form-split' name="form_email" placeholder='Email Address' required />
                                <input id="Subject" name="form_subject" placeholder='Subject' required  />
                                <textarea placeholder='Message' name="form_message" rows={"6"} required ></textarea>
                            </div>
                            <div className='form-send'>
                                <button type="submit" role='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}