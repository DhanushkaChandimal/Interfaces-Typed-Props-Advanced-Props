import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person } from './models/Person.model';

function App() {
  const student: Person = {
    name: 'John',
    age:25
  }

  return (
    <div>  
      {student.name}
    </div>
  );
}

export default App;