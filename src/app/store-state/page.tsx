"use client";
import { createPerson, createProduct, createStore, purchaseProduct } from "@/helpers";
import { generateProductData } from "@/product_data";
import _ from "lodash";
import { useState } from "react";


export default function Store() {

  const person = createPerson({
    firstName: "John",
    lastName: "Doe",
    address: "123 Fake St",
    phone: "555-555-5555",
    type: "customer",
  });

  const employee = createPerson({
    firstName: "Jane",
    lastName: "Doe",
    address: "123 Fake St",
    phone: "555-555-5555",
    type: "employee",
    id: "123",
    jobTitle: "Manager",
    hasKeys: true,
  }) as Employee;

  const product1 = createProduct({
    EAN: "973120330863",
    name: "Milwaukee - Screwdriver ",
    description:
      "The Milwaukee - Screwdriver  is a tool that is used for milwaukee - screwdriver ing.",
    stock: 3,
    price: 314,
  });

  const product2 = createProduct({
    EAN: "9331120330863",
    name: "Milwaukee - Screwdriver 2",
    description:
      "The Milwaukee - Screwdriver 2  is a tool that is used for milwaukee - screwdriver  2ing.",
    stock: 0,
    price: 314,
  });

  const store = createStore([employee],[product1,  product2], "3637 Cedar St", "345678765")

  purchaseProduct(person, product1.EAN, store)
  purchaseProduct(employee, product2.EAN, store)
  purchaseProduct(employee, "1", store)

  return (
    <main>
      <h1>Store</h1>
      {/* {_.times(10, () => (
        <pre>
          {JSON.stringify(generateProductData(), null, 2)}
        </pre>
      ))} */}
    </main>
  );
}
