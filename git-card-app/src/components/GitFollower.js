import React from 'react';

const GitFollower= props => {
console.log('propsf', props)
   
    return (
        <div>
            {props.followers.map((item,index) => {
               console.log('item', item) 
               return (
                <div key={index}>
                  <img src={item.avatar_url} alt="User profile" />
                  <div>
                    <div>{item.login}</div>
                  </div>
                </div>
               )
            })}
        </div>
    )
}
export default GitFollower;