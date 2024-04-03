import { useState } from "react";


const AddPlayerForm = ({setNeedsUpdating}) => {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const postPlayer = async () => {
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setName("");
      setBreed("");
      if(result.success) {
        setNeedsUpdating(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postPlayer();
  }

  return(
  <>
  <h2>Add Player</h2>
  <form onSubmit={handleSubmit}>
    <label>Puppy Name:</label>
    <input type="text" id="name" value={name} onChange={(event) => {
      setName(event.target.value)
    }}/><br />
    <label>Puppy Breed:</label>
    <input type="text" id="breed" value={breed} onChange={(event) => {
      setBreed(event.target.value)
    }} /><br />
    <input type="submit" value="Add Puppy"/>
  </form>
  </>
  )
}

export default AddPlayerForm;