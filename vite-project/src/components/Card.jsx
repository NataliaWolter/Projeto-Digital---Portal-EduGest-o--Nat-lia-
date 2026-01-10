function Card({ titulo, valor, cor }) {
  return (
    <div className="card" style={{ backgroundColor: cor }}>
      <h3>{titulo}</h3>
      <span className="card-valor">{valor}</span>
    </div>
  );
}

export default Card;
