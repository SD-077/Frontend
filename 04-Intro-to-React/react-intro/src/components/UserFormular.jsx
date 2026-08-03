import { useState } from "react"

function UserFormular({setUser}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!name || !age || !email) {
        alert('Inputs need to be filled!');
        return;
      }
      // const formData = {
      //   name,
      //   age,
      //   email
      // }
      setUser({name, age, email})
      setName("")
      setAge("")
      setEmail("")
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
        name='name'
        placeholder='name...'
      />
      <input onChange={(event) => setAge(event.target.value)} value={age} type='text' name='age' placeholder='age..' />
      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        type='email'
        name='email'
        placeholder='email...'
      />
      <button type='submit'>Send</button>
    </form>
  );
}

export default UserFormular