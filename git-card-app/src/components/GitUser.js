import React from 'react';
  
const GitUser= props => {
   
        return (
      <div>
        <img src={props.user.avatar_url} alt="Card image cap" />
        <div>
          <h2>{props.user.name}</h2>
          <p>{props.user.login}</p>
          <p>Followers: {props.user.followers}</p>
          <p>Following: {props.user.following}</p>
        </div>
      </div>
  );   
}
export default GitUser;