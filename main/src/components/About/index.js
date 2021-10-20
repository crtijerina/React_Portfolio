import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          
Like to focus on understanding my real limitations and then finding how to combat them,
I become a fair and kinder person who enjoys building bridges with people just like you. 
Meeting aggressive deadlines in the team environment where maybe one can build long-term 
professional relationships, while delivering the expected service or product for the company 
and their clients. Currently holding a Bachelors in Geography, continue learning while 
working in settings that promote others and myself. My attention to details, mindfulness 
to the job and where others play their part of the process, along with working knowledge 
of business development operations are in part why I feel that I am ready to be a great 
fit to the team, lets talk and see if I will be.
        </p>
      </div>
    </section>
  );
}

export default About;
