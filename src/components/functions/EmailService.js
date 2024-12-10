import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast, Flip } from 'react-toastify';

const EmailService = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('j3cH0P0RtFOlI0', 'p0rtf0li0_temp', form.current, {
        publicKey: 'h-j_S__WiyfWCtrhC',
      })
      .then(
        () => {
            toast.success('Message sent!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
            
            form.current.reset();
        },
        (error) => {
            toast.error(`You've reached your email limit for now. Please try again later!`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
        },
      );
  };

  return ([form, sendEmail]);
};

export default EmailService;