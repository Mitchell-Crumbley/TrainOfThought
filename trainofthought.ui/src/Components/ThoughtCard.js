import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from 'styled-components';
import { deleteThought } from "../Helpers/Data/thoughtsData";
import ThoughtForm from "./ThoughtForm";

const SingleThoughtCard = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  border: 2px solid #e7e7e7;
  box-shadow: 50px;
`;

export default function ThoughtCard({
  id, 
  connectedWord, 
  savedWord,
  userId, 
  setThoughts
}) {
  const [update, setUpdate] = useState(false);

  const handleButton = (p) => {
    switch (p) {
      case 'delete': 
        deleteThought(id).then(r => setThoughts(r));
      break;
      case 'update':
        setUpdate(!update)
      break;
      // case 'single':
      //   getSinglePayment(id).then(r => console.warn(r));
      // break;
      default:
      break;
    }
  };

  return (
    <SingleThoughtCard>
    <div>
      Id: {id} <br/>
      Connected Word: {connectedWord} <br/>
      Saved Word: {savedWord} <br/>
      User: {userId} <br/>
        {/* <Button onClick={() => handleButton('single')}>Info</Button> */}
        <Button onClick={() => handleButton('update')}>Update</Button>
        <Button onClick={() => handleButton('delete')}>Delete</Button>
      {
        update
        ? <ThoughtForm 
            id={id}
            connectedWord={connectedWord}
            savedWord={savedWord}
            userId={userId}
            setThoughts={setThoughts}
            update={update}
            setUpdate={setUpdate}
          />
        : ''
      }
    </div>
    </SingleThoughtCard>
  )
}
