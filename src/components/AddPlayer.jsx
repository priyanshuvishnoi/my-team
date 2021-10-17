import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddPlayer = ({ addPlayer }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [batstyle, setBat] = useState('');
  const [bowlstyle, setBowl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newPlayer = {
      name: name,
      country: country,
      batstyle: batstyle,
      bowlstyle: bowlstyle,
    };
    addPlayer(newPlayer);
    setName('');
    setCountry('');
    setBat('');
    setBowl('');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //     <input type='text' placeholder='Name' value = {name} onChange={(e)=> setName(e.target.value)}></input> <br/>
    //     <input type='text' placeholder='Country' value = {country} onChange={(e)=> setCountry(e.target.value)}></input> <br/>
    //     <input type='text' placeholder='Batting Style' value = {batstyle} onChange={(e)=> setBat(e.target.value)}></input> <br/>
    //     <input type='text' placeholder='Bowling Style' value = {bowlstyle} onChange={(e)=> setBowl(e.target.value)}></input> <br/>
    //     <Button variant="primary" type="submit">Add Player</Button>
    // </form>

    <Form onSubmit={handleSubmit} className="body__addPlayer">
      <div className="col">
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="col">
        <Form.Control
          type="text"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </div>
      <br />
      <div className="col">
        <Form.Control
          type="text"
          placeholder="Batting Style"
          value={batstyle}
          onChange={e => setBat(e.target.value)}
        />
      </div>
      <br />

      <div className="col">
        <Form.Control
          type="text"
          placeholder="Bowling Style"
          value={bowlstyle}
          onChange={e => setBowl(e.target.value)}
        />
      </div>
      <br />

      <Button variant="primary" type="submit" className="col">
        Add Player
      </Button>
    </Form>
  );
};
export default AddPlayer;
