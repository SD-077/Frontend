import z from "zod";
import "./App.css";

function App() {
  const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.email(),
    address: z.object({
      street: z.string(),
      suite: z.string(),
      city: z.string(),
      zipcode: z.string(),
      geo: z.object({
        lat: z.string(),
        lng: z.string(),
      }),
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
      name: z.string(),
      catchPhrase: z.string(),
      bs: z.string(),
    }),
  });

  type User = z.infer<typeof userSchema>;

  const arrayOfUsers = z.array(userSchema);

  // const goodUser = userSchema.parse({
  //   id: 1,
  //   name: "Bob",
  //   email: "bob@mail.com",
  // });

  // const badUser = userSchema.parse({
  //   id: 2,
  //   name: "Mike",
  // });

  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const result = arrayOfUsers.safeParse(data);

    if (!result.success) {
      console.error("The data didn't match what we expected");
      return [];
    }

    console.log(result.data);
  }

  getUsers();

  // console.log(goodUser);
  // console.log(badUser);

  const phoneNumber = 49165000555888;
  const phoneNumberString = "49165000555888";

  return (
    <div>
      <h1>Zod in React</h1>
      <h4>{phoneNumber}</h4>
      <h4>{phoneNumberString}</h4>
    </div>
  );
}

export default App;
