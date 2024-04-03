// AllPlayers.jsx
import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import OnePlayer from "./OnePlayer";

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players';

const AllPlayers = ({ needsUpdating, setNeedsUpdating }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPup, setSelectedPup] = useState(null);

  useEffect(() => {
    fetchAllPlayers();
  }, [needsUpdating, players]);

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      const puppies = json.data.players;
      setPlayers(puppies);
    } catch (err) {
      console.error(err);
    }
  }

  const selectPup = (pup) => {
    setSelectedPup(pup);
  }

  const deletePup = async (pupId) => {
    try {
      const response = await fetch(`${API_URL}/${pupId}`, {
        method: 'DELETE'
      });
      setNeedsUpdating(true);
    } catch (err) {
      console.error('Error deleting pup:', err);
    }
  }

  return (
    <>
      <h2>All Players</h2>
      <h3>Click a player's card to learn more</h3>
      {selectedPup ? (
        <>
          <OnePlayer selectedPup={selectedPup} />
          <button onClick={() => setSelectedPup(null)}>Click Here To Return</button>
        </>
      ) : (
        players.map((pup) => (
          <>
          <PlayerCard key={pup.id} pup={pup} onClick={selectPup} />
          <button onClick={() => deletePup(pup.id)}>Delete Above Pup</button>
          </>
        ))
      )}
    </>
  )
}

export default AllPlayers;
