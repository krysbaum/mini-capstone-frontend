/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product.id);
  };

  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>${props.product.price}0</p>
      <p>
        <i>{props.product.description}</i>
      </p>
      <p>
        <img width="300" src={props.product.primary_image} alt="" />
      </p>
      <p>Current inventory: {props.product.inventory}</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="integer" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
          Inventory: <input defaultValue={props.product.inventory} name="inventory" type="integer" />
        </div>
        <div>
          Image URL: <input defaultValue={props.product.primary_image} name="primary_image" type="text" />
        </div>
        <button type="submit">Update Product</button>
      </form>
      <button onClick={handleClick}>Destroy Product</button>
    </div>
  );
}
