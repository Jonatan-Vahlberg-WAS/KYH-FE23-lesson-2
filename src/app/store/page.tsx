
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

    const otherEmployee: employee = {
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
      Store
    </main>
  );
}
