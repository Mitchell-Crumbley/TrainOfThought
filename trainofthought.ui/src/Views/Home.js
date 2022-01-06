import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {FlexyDiv } from '../Components/styles';
import { getWebsterWord } from '../Helpers/Data/requestsData';
import {  getUserThoughts } from '../Helpers/Data/thoughtsData';
import { getUserByFBKey } from '../Helpers/Data/userData';
import { TagCloud } from 'react-tagcloud';

const HomeHeader = styled.div`
h1 {
  font-weight: 400;
  line-height: 1.2;
  margin-top: 5%;
  margin-bottom: 5%;
}
`;
const HomeProductContainer = styled.div`
background-color: #ffe8d6;
h1, h2, h3, h4, h5, p {
  font-weight: 300;
  line-height: 1.2;
}
`;

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 2s linear',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size }em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'White',
    }}
  >
    {tag.value}
  </span>
)

export default function Home({ firebaseUser, user }) {
  const [homeThoughts, setHomeThoughts] = useState([]);
  const [resp, setResp] = useState([]);
  const results = resp.map(a => a.meta.syns[0]);
  const filterResults = results[0];
  
  //Whenever I take the comments off this it breaks my app. This filter is what makes the app work. 
  //I believe this has to do with there being no setResp when I first load the page.
//   const newData = filterResults.map(item => {
//     const container = {};
//     container.value = item;
//     container.count = Math.floor(Math.random() * 50);
//     return container;
// });


  const data = [
  { value: 'Test', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
]
  
  useEffect(() => {
    getUserByFBKey(firebaseUser.uid).then((resp) => {
      getUserThoughts(resp.id)
      .then(setHomeThoughts);
      console.warn(homeThoughts)
    })
  },[firebaseUser.uid])

return (
  <>

  <HomeHeader>
  <div className='d-flex justify-content-center mb-4'>
    <h2>Saved Thoughts</h2>
  </div>

  </HomeHeader>
  <FlexyDiv>
        <input type="text" id="text" />
        <input type="button" id="btn" value="Submit" onClick={() => getWebsterWord().then((resp) => setResp(resp)).then(console.warn(filterResults))}/>
  </FlexyDiv>
<div>
  <br></br>
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
</div>


  </>
);
}
