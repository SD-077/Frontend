
const StudentCard = ({ student: { name, age, email } }) => {
  return (
    <div className='card card-border card-xl shadow-xl'>
      <p className="card-title">{name}</p>
      <div className="card-body">
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default StudentCard;
