import './ItemListContainer.css';

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container">
      <h2>{saludo}</h2>
      <p>Aquí se mostrará el catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;
