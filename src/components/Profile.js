import React from 'react';


const Profile = ( {firstname, lastname, profilephotosource, company, position} ) => {

  return (
    <div className='bg-washed-blue dib ma2 pa3 shadow-5'>
      <div className='tc'>
        <img src={profilephotosource} alt='' />
      </div>
        <div className='tc'>
          <h2>{firstname} {lastname}</h2>
          <h3>{position}</h3>
          <p >at {company}</p>
      </div>
    </div>  
  );
}

export default Profile;