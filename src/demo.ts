type Product = {
  price: number;
};

(async ()=> {
  const myCart: Product[] = [];
  const products: Product[] = [];
  const limit = 2;

  async function getProducts(): Promise<void> {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data: Product[] = await rta.json();
    products.push(...data);
  }
  function getTotal(): number {
    let total = 0;
    for (const product of products) {
      total += product.price;
    }
    return total;
  }
  function addProduct(index: number): void {
    const product = products[index];
    if (product && getTotal() <= limit) {
      myCart.push(product);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  // const rta = person + limit;
  // console.log(rta);
})();
