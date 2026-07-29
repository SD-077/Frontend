import StudentCard from "./components/StudentCard";

function App() {
  const person = {
    name: 'Maria',
    age: 54,
    hobbies: ['cooking', 'painting'],
  };
  const displayPerson = false;
  console.log(person);
  return (
    <div className='h-screen flex flex-col place-items-center place-content-center'>
      <h1>Hello class</h1>
      <section>
        <h2>intro to react</h2>
      </section>
      {/* Display StudentCard Component */}
      <StudentCard student={person} />
      {displayPerson ? <p>{person.name}</p> : <p>Person not found</p>}
    </div>
  );
}

export default App;
