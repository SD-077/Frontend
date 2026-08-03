import { useState } from "react"
import Button from "./Button";

function UserObjFormular({setUser}) {
    const [formData, setFormData] = useState({name: "", age: "", email: ""});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.age || !formData.email) {
            alert('Inputs need to be filled!');
            return;
        }
        setUser(formData);
        setFormData({name: "", age: "", email: ""});
    }
  return (
    <form className="fieldset" onSubmit={handleSubmit}>
      <legend className="fieldset-legend">User Information</legend>
      <input className="input" onChange={handleChange} value={formData.name} type='text' name='name' placeholder='name...' />
      <input className="input" onChange={handleChange} value={formData.age} type='text' name='age' placeholder='age..' />
      <input className="input" onChange={handleChange} value={formData.email} type='email' name='email' placeholder='email...' />
      <Button type="submit" style="" text="Send" />
    </form>
  );
}

export default UserObjFormular