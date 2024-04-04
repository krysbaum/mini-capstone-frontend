/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Supplier: <input name="supplier_id" type="text" />
        </div>
        <div>
          Inventory: <input name="inventory" type="text" />
        </div>
        <div>
          Image URL: <input name="image" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
