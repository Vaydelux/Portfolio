import React from 'react'
import Observer from './effects/Observer'
import useHeightMeasurer from './effects/HeightMeasurer';

export default function Experience() {
    const [ref, isVisible] = Observer(0.01);
    // const educationalRef = useHeightMeasurer(); // Using the hook to get the ref
    // const professionalRef = useHeightMeasurer(); // Using the hook to get the ref
  return (
    <section className={`exp-sec ${isVisible ? 'show-sec' : ''}`} ref={ref} id={`exp-sec`}>
        <div className='exp-wrap'>
            <div className='exp-container'>
                <h2 className='exp-title'>Experience</h2>
                <div className='exp-group'>
                    <div className='exp-tab'>
                      <h3>Educational</h3>
                      <div className={`tab-container`}>
                        <div className='tab-list'>
                          <div className='list-title'>Information Technology </div> 
                          <div className='list-desc'>
                              <ul className='desc-tab'>
                                <li><b>ICCT Colleges</b></li>
                                <li>Graduated: December 2022</li>
                                <li><br /></li>
                                <li><b>Key Achievements :</b></li>
                                <li className='tab-milestones'>
                                  <div className="milestones">
                                    <div className="item">Gained skills in VB.Net, Python, C#, and database systems.</div>
                                    <div className="item">Contributed to the development of a Clinical Management System, taking a lead role in planning and design.</div>
                                    <div className="item">Completed Python Essentials and CCNA seminars.</div>
                                    <div className="item">Learned about database systems and applied these skills in various projects.</div>
                                  </div>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='exp-tab'>
                      <h3>Professional</h3>
                      <div className={`tab-container`}>
                        <div className='tab-list'>
                          <div className='list-title'>C# Asp.Net Developer</div> 
                          <div className='list-desc'>
                              <ul className='desc-tab'>
                              <li><b>MNLeistung Inc.</b></li>
                                <li>March 2023 to May 2024</li>
                                <li><br /></li>
                                <li><b>Key Achievements :</b></li>
                                <li className='tab-milestones'>
                                  <div className="milestones">
                                    <div className="item">Contributed to the development and maintenance of data-driven web applications using ASP.NET Core, C#, MSSQL, and Agile/SCRUM methodologies</div>
                                    <div className="item">Assisted in creating UI components with ASP.NET, Ajax, JavaScript/jQuery, HTML, and CSS.</div>
                                    <div className="item">Supported the implementation of business management applications and customized software solutions.</div>
                                  </div>
                                </li>
                              </ul></div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
