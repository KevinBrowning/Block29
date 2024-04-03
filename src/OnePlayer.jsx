import AllPlayers from "./AllPlayers"

const OnePlayer = ({selectedPup}) => {
  return(
    <section className="playerCard">
      <h2>{selectedPup.name}</h2>
      <img src={selectedPup.imageUrl} alt={selectedPup.name} />
      <p>{selectedPup.breed}</p>
      <p>{selectedPup.status}</p>
      <p>{selectedPup.teamId}</p>
    </section>
  )
}
export default OnePlayer