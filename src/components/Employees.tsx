import React, { Dispatch, FormEvent, SetStateAction } from "react";

type EmployeesProps = {
    store: Store;
    setStore: Dispatch<SetStateAction<Store>>
}

//! Old FC functional component typing
// const Employees: React.FC<EmployeesProps> = ({}) => {

// }


function Employees({
    store,
    setStore
}: EmployeesProps) {

    function onEmployeeSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement);
        const firstName = data.get("firstName")?.toString() || ""
        const lastName = data.get("lastName")?.toString() || ""
        const address = data.get("address")?.toString() || ""
        const phone = data.get("phone")?.toString() || ""
        const jobTitle = data.get("jobTitle")?.toString() || ""
        const hasKeys = data.get("hasKeys") === "on";
        
        console.log("Form submitted", hasKeys)
        console.log()

        const newEmployee: Employee = {
            id: `${store.employees.length +1}`,
            type: "employee",
            firstName,
            lastName,
            address,
            phone,
            jobTitle,
            hasKeys
            
        }

        setStore(prev => {
            return {
                ...prev,
                employees: prev.employees.concat(newEmployee)
            }
        })
    }

    return (
        <div>
            {/* //TODO handle form */}
            <form onSubmit={onEmployeeSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName" />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <br />
                <label>
                    Job Title:
                    <input type="text" name="jobTitle" />
                </label>
                <br />
                <label>
                    Has Keys:
                    <input type="checkbox" name="hasKeys" />
                </label>
                <br />
            <button>Add Employee</button>
            </form>
            <h2>Employees</h2>
            {store.employees.map(employee => (
                <pre key={employee.id}>
                    {JSON.stringify(employee, null, 2)}
                </pre>
            ))}
        </div>
    )
}

export default Employees