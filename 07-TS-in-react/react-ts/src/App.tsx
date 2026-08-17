import Button from "./components/Button";
import DeleteButton from "./components/DeleteButton";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function App() {
  // const [count, setCount] = useState(0); // inferred as number
  // const [name, setName] = useState(""); // inferred as string
  // const [isOpen, setIsOpen] = useState(false); // inferred as boolean

  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="flex flex-col items-start gap-8 p-8">
      <h1 className="text-3xl font-bold">React + TypeScript</h1>
      <Greeting name="Bob" age={30} isVip={true} />
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
      </Card>
    </div>
  );
}
