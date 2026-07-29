import Hobbies from "./Hobbies";

const StudentCard = ({student: {name, age, hobbies}}) => {
    
  return (
    <div className='card'>
      <p>
        {name}, {age}
      </p>
      <div>
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <Hobbies key={index} hobby={hobby} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentCard;