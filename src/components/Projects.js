import React from 'react'
import Observer from './effects/Observer'

export default function Projects() {
    const [ref, isVisible] = Observer(0.01);
  return (
    <section className={`project-sec ${isVisible ? 'show-sec' : ''}`} ref={ref} id={`project-sec`}>
        <div className='project-wrap'>
            <div className='project-container'>
                <h2 className='project-title'>Projects</h2>
                <div className='project-list'> 
                    <div className='project-card'>
                        <h3 className='card-title'>Procurement System</h3>
                        <div className='card-img'>
                            <img src='/Portfolio/assets/images/Procurement.png' alt='Procurement' />
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='card-overview paragraphs'>
=======
                        <div className='card-overview'>
>>>>>>> parent of 95d4430 (Updates)
=======
                        <div className='card-overview'>
>>>>>>> parent of 63b650a (changes on portfolio)
                        In my previous company, I worked on a comprehensive Procurement System 
                        aimed at streamlining the purchasing and supply chain processes. 
                        The system was designed to facilitate efficient procurement management, ensure timely delivery of goods,
                         and optimize the overall procurement lifecycle.
                        </div>
                        <div className='card-technologies'>
                        <h3>Technologies Used</h3>
                            <div className='tech-container'>
                                <a href="#!" className='tech-icons' title='C#'><i className="devicon-csharp-plain colored"></i></a>
                                <a href="#!" className='tech-icons' title='.Net'><i className="devicon-dotnetcore-plain colored"></i></a>
                                <a href="#!" className='tech-icons' title='jQuery'><i className="devicon-jquery-plain-wordmark colored"></i></a>
                                <a href="#!" className='tech-icons' title='Bootstrap'><i className="devicon-bootstrap-plain colored"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <h3 className='card-title'>Inventory System</h3>
                        <div className='card-img'>
                            <img src='/Portfolio/assets/images/Inventory.png' alt='Procurement' />
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='card-overview paragraphs'>
=======
                        <div className='card-overview'>
>>>>>>> parent of 95d4430 (Updates)
=======
                        <div className='card-overview'>
>>>>>>> parent of 63b650a (changes on portfolio)
                        In my previous company, I worked on a simple Inventory System that managed stock levels and tracked inventory movements.
                         The system provided an easy way to record and monitor stock, helping maintain accurate records and support purchasing decisions.
                          It was integrated with the procurement process to ensure smooth operations across departments.
                        </div>
                        <div className='card-technologies'>
                            <h3>Technologies Used</h3>
                            <div className='tech-container'>
                                <a href="#!" className='tech-icons' title='C#'><i className="devicon-csharp-plain colored"></i></a>
                                <a href="#!" className='tech-icons' title='.Net'><i className="devicon-dotnetcore-plain colored"></i></a>
                                <a href="#!" className='tech-icons' title='jQuery'><i className="devicon-jquery-plain-wordmark colored"></i></a>
                                <a href="#!" className='tech-icons' title='Bootstrap'><i className="devicon-bootstrap-plain colored"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}
