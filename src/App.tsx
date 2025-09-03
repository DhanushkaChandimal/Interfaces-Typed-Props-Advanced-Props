import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';

function App() {
  const student: Person = {
    name: 'John',
    age:25
  }

  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }

  console.log({profileData});

  return (
    <div>  
      {student.name}
      {profileData.person.name}
    </div>
  );
}

export default App;