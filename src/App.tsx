import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import PersonComponent from './components/PersonComponent';
import Status from './components/Status';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';

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
      <Card>
        <Card.Body>
          <PersonComponent {...profileData}/>
        </Card.Body>
      </Card>
      <Status />
      <Header>Hey there buddy!</Header>
      <Header children={'children message'}/>
    </div>
  );
}

export default App;