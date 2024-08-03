import React, { useEffect } from 'react';
import './blogs.css';

const Prajakta_Kapre = () => {
  useEffect(() => {
    const ids = ['hi-everyone', 'walk-first-year', 'run-third-semester', 'aim-day','hr'];
    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.fontSize = '24px';
      }
    });
  }, []);

  return (
    <div className='blog'>
      <div className='container-fluid'>
        <div className='row blog-row'>
          <div className='col-md-4'>
            <img src='placement-postulates/dp/Prajakta.png' className=' h-85 p-0 ' alt='Prajakta Kapre' />
          </div>
          <div className='col-md-8'>
            <div className='blog-head'>
              <h2  > Prajakta Kapre</h2>
              <small>Technical Engineer at HILTI company</small>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div>
              <p id='hi-everyone'>Hi Everyone!</p>
              <p>
                Hello folks! I am Prajakta Kapre, currently placed in HILTI company in the Value Engineering hub as
                Technical Engineer-1. I was a Y22, M-Tech student in Structural engineering specialization of civil
                engineering. I am writing the following content in order to help my juniors to take up a path leading
                them to good things. This is a both way deal as I am reliving my time at the best place through this.
              </p>
              <p id='walk-first-year'>Walk - 1st year</p>
              <p>
                Entering this beautiful campus with an anxious mind, I began my journey. Initially getting use-to the
                surprise quizzes, un-ending assignments was quite a task but believe me as the time passes you become a
                part of it. This year was full of learning new subjects, delving deeper into mechanics, performing
                experiments, report making, delivering presentations, submitting assignments and giving exams. This is
                that time when the concepts are built and you just focus on the learnings. Your CPI that will be there
                in your resume will be a result of this 1st year, so better try to keep it above 8.5+(if going only for
                core).
                <br />
                <br />
                <span id='run-third-semester'>Run – 3rd semester</span>
              </p>
              <p>
                <img className='blog-image-right' src='\placement-postulates\blogs\Prajakta-kapre\photo.png'  alt='Pic'/>
                You will so dearly wish that this time just flies off. These days are full of confusion, nervousness,
                anxiety and tension. But in this phase, “Be like a steel guy rather than a concrete guy who is weak in
                tension”. Just focus on the personality development, making resumes and focus on upskilling yourself.
                If you are preparing only for core then you should revise your concepts, pick your favorite subject and
                study it in detail, revisit your learnings in your internships and make sure you know all of it. Prepare
                resume in such a way that you have answers to any question asked related to it. Practice aptitude
                questions with a group of friends so that it is fun while competitiveness is still there. You should be
                studying in a group. You should also have a broad idea of your thesis and your literature review should
                be done as one of the obvious questions would be on your thesis. Just focus on your work at hand and
                don’t be pulled away by worrying about things you can’t control. Believe me each and every one finds it
                difficult to concentrate during this time but you should get going and be positive as that is the only
                solution.
                <br />
                <br />
              </p>
              <p id='aim-day'>Aim – The day</p>
              <p>
                This day will arrive for each and everyone of you reading this article. The
                key to succeed on this day is not to think too much about the results and
                wearing a cap of confidence. The questions which were asked to me
                during my interview on Day 1 were as follows:
              </p><p>
                Core questions were mostly based upon my resume and hence I would
                suggest to be thorough with your resume.</p>
              <p>
                1. What do you mean by shear wall and why is it needed?</p>
              <p>   2. Some basic questions based on force transfer through columns like
                what force is experienced when there is lifting of any pre-fabricated
                deck? (this was related to my previous job)</p>
              <p> 3. They asked me how did I do deck lifting analysis as I had mentioned it
                in my resume.</p>
              <p> 4. Some questions were based on my thesis.
              </p>
              <p id='hr'>HR questions:</p>
              <p>1. What are your strengths and weaknesses?</p>
              <p>2. What are your short-term and long-term aspirations?</p>
              <p>3. What are the qualities required to be a leader?</p>
              <p>4. How will you justify that you are a team player?</p>
              <p>At the end I would just like to conclude by saying that don’t let anxiety
                overpower you at this crucial stage. Keep calm and do your work daily
                with perseverance even when its impossible to. </p><p>Don’t forget to be
              happy and experience this thrilling time of your life.</p>
              <p>!! All the best !! </p>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Prajakta_Kapre;
