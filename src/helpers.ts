export function createPerson(data: Person | Employee): Person | Employee {
  if (data.type === "customer") {
    const person: Person = data;
    console.log("Ok: Customer created");
    return person;
  }

  const employee: Employee = data as Employee;
  console.log("Ok: Employee created");
  return employee;
}

export function createProduct(data: Product): Product {
  console.log(`Ok: Product ${data.name} created`);
  return data;
}

export function createStore(
  employees: Employee[],
  products: Product[],
  address: string,
  businessNumber: string
): Store {
  const store: Store = {
    employees,
    products,
    address,
    businessNumber,
    id: Math.floor(Math.random() * 1000000).toString(),
  };
  console.log("Ok: Store created with products and employees");
  return store;
}

export function purchaseProduct(
  customer: Person,
  product: string,
  store: Store
) {
  const productIndex = store.products.findIndex((p) => p.EAN === product);

  if (productIndex === -1) {
    return console.log("ERROR: Prroduct not in inventory");
  }

  const _product = store.products[productIndex];
  if (_product.stock <= 0) {
    return console.log("ERROR: Prroduct out of stock");
  }

  console.log(`OK: purchase of ${_product.name} was successful`);
}
