import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

const App = () => {

  return (
    <main className=" h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};

export default App;



//!importante para crear componentenes rapidos, usar RAFC