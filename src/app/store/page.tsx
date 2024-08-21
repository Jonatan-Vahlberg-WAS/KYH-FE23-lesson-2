"use client";
import { generateProductData } from "@/product_data";
import _ from "lodash";

type Person = {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    type: "customer" | "employee"
}

type employee = Person & {
    id: string;
    jobTitle: string;
    hasKeys: boolean;
    type: "employee"
}


export default function Store() {

    const person: Person = {
        firstName: "John",
        lastName: "Doe",
        address: "123 Fake St",
        phone: "555-555-5555",
        type: "customer"
    }

    const employee: employee = {
        firstName: "Jane",
        lastName: "Doe",
        address: "123 Fake St",
        phone: "555-555-5555",
        type: "employee",
        id: "123",
        jobTitle: "Manager",
        hasKeys: true
    }

  
  return (
    <main>
        <h1>Store</h1>
      {_.times(10, () => (
        <pre>
          {JSON.stringify(generateProductData(), null, 2)}
        </pre>
      ))}
    </main>
  );
}
