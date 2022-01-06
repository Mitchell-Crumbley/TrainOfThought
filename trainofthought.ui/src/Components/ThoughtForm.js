import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { updateThought } from '../Helpers/Data/thoughtsData';



const ThoughtForm = ({  
    id, 
    connectedWord, 
    savedWord, 
    userId, 
    setThoughts,
    update,
    setUpdate,
    addThought,
    setAddThought
}) => {
 
    const [updatedThought, setUpdatedThought] = useState({
        id: id,
        ConnectedWord: connectedWord,
        SavedWord: savedWord,
        userId: userId,
    });
    const history = useNavigate()
    const handleInputChange = (e) => {
      setUpdatedThought((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (id) {
            updateThought(updatedThought.id, updatedThought)
                .then(r => setThoughts(r))
            setUpdate(!update);
        } else {
            addThought(updatedThought)
                .then(r => setThoughts(r));
            setAddThought(!addThought);
        }
    }
    


    return (
        <Form onSubmit={handleUpdate}>
            <FormGroup> 
                <Label htmlFor='id'>Id: </Label>
                <Input 
                    type='text'
                    id='id' 
                    defaultValue={id} 
                    name='id'
                    onChange={handleInputChange}
                >
                </Input>
                <Label htmlFor='connectedWord'>ConnectedWord : </Label>
                <Input 
                    type='number' 
                    id='connectedWord'
                    defaultValue={connectedWord} 
                    name='connectedWord'
                    onChange={handleInputChange}
                >
                </Input>

                <Label htmlFor='savedWord'>Saved Word : </Label>
                <Input 
                    type='text'
                    id='savedWord' 
                    defaultValue={savedWord} 
                    name='savedWord'
                    onChange={handleInputChange}
                >
                </Input>

                <Label htmlFor='userId'>User Id : </Label>
                <Input 
                    type='text'
                    id='userId' 
                    defaultValue={userId} 
                    name='userId'
                    onChange={handleInputChange}
                >
                </Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    );

}



export default ThoughtForm;
