import React from 'react';
import '../App.css';

function AboutWrapper(){
  return (
    <div className='About'>
      <h1>Hello World!</h1>
      <p id='belowHeader'>Welcome to the About page of the site.</p>
      <div className='descriptionWrapper'>
        <h3 className='aboutText'>ABOUT</h3>
        <p className='aboutText'>This site was made using React.</p>
        <p className='aboutText'>On Home page, you can add tasks to your To-Do list, update them or delete them.</p>
        <p className='aboutText'>Clicking on the task's text marks it as completed.</p>
        <p className='aboutText' id='date'>August, 2023</p>
      </div>
    </div>
  )
}

export default AboutWrapper;