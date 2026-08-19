import Button from "./components/Button";
import DeleteButton from "./components/DeleteButton";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import React, { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function App() {
  // const [count, setCount] = useState(0); // inferred as number
  // const [name, setName] = useState(""); // inferred as string
  // const [isOpen, setIsOpen] = useState(false); // inferred as boolean

  type Size = "sm" | "md" | "lg";

  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [size, setSize] = useState<Size>("md");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "sm" || value === "md" || value === "lg") {
      setSize(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked", e.currentTarget);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col items-start gap-8 p-8">
      <h1 className="text-3xl font-bold">React + TypeScript</h1>
      <select value={size} onChange={handleDropdownChange}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
      {/* <input
        className="input"
        placeholder="Type something"
        type="text"
        value={name}
        onChange={handleChange}
      /> */}
      {/* <Greeting name="Bob" age={30} isVip={true} />
      <Greeting name="Mike" age={40} isVip={false} />
      <Button label="Click me" variant="secondary" />
      <DeleteButton
        label="Delete User"
        onDelete={() => console.log("user deleted")}
      />
      <Card>
        <h3 className="card-title">Some heading</h3>
        <p>Lorem ipsum dolor sit</p>
      </Card>

      <Card>Just some plain text</Card>

      <Card>
        <Greeting name="Mike" age={40} isVip={false} />
      </Card> */}
    </div>
  );
}
