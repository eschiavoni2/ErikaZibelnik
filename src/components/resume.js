import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Erika Zibelnik</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
            <p>I am interested in a challenging Software Engineer opportunity in an environment where innovation, education, and creativity are valued. I have been passionate about development and will use the skills I learned with consideration of customer needs, functionality, latest technology, and programming standards. I have solid experience in previous places of work with troubleshooting and problem solving. I am a fast learner and strong team player with excellent social skills to interact with any individual.</p>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
            <h5>Contact:</h5>
            <p>Melbourne, Florida</p>
            <p>(440) 382-9494</p>
            <p>E.m.zibelnik@gmail.com</p>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="University of Central Florida"
              schoolDescription="I earned my MERN stack certificate through UCF’s coding bootcamp. It provided me with all the necessary tools to become a Software Engineer."
               />

               <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="Cleveland State University"
                 schoolDescription="I earned my Bachelor’s degree in Biology."
                  />
                <hr style={{borderTop: '3px solid white'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Veterinary Technician at Rockledge Animal Clinic"
              jobDescription="Blood draws and catheters, cytologies, loading rooms and gathering patient information, surgery prep and monitoring, x-rays, euthanasia, vaccines, and more."
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Biologist at Enviroscience"
                jobDescription="Snorkeling/scuba for collecting freshwater mussels, variety of survey techniques with randomized sampling to determine quantity and species diversity, measuring/aging/identifying/sexing mussels, tracking mussels, and more."
                />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Education Program Specialist at Lake Erie Nature and Science Center"
                jobDescription="Educating the public with a variety of programs from 1+ years of age and up, guided nature hikes providing information about the natural world, research, STEM field trips, children’s camps, crafting education programs, creating visual media, creating signage, and training with permanent reside animal ambassadors."
                />
              <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={30}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
