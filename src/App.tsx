import { FormEvent, useState } from 'react';
import { FormCreate } from './components/FormCreate';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Title } from './components/Tilte';

import { v4 as createId } from 'uuid';

import styles from './styles/App.module.scss';
import './styles/global.scss';

const tasksDefault = [
  {
    id: 'd4e5a91a-7642-444a-afed-27f1a06ce363',
    content: 'Fazer arroz doce',
    isCompleted: false,
  },
  {
    id: '433899a3-2548-427d-93d1-a293f0168c41',
    content: 'Fazer arroz doce',
    isCompleted: false,
  }
]

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>(tasksDefault);
  const [changeInput, setChangeInput] = useState('');

  const countNumberOfTasks = tasks.length;
  const countNumberOfTasksComplete = tasks.filter(task => task.isCompleted === true).length;

  function handleCreateNewTask(value: string) {
    const createRandomId = createId();

    const data = {
      id: createRandomId,
      content: value,
      isCompleted: false
    }

    setTasks([...tasks, data]);
    setChangeInput('');
  }

  function handleDeleteTask(id: string) {
    const deleteTask = tasks.filter(task => task.id !== id);

    setTasks(deleteTask);
  }

  function handleCompletedTask(id: string) {
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    setTasks(updatedTask);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <FormCreate 
            onCreateNewTask={handleCreateNewTask}
            changeInput={changeInput}
            setChangeInput={setChangeInput}
          />
        </div>
        <Title 
          numberOfTasks={countNumberOfTasks}
          numberOfTasksCompleted={countNumberOfTasksComplete}
        />

        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            onDeleteTask={handleDeleteTask}
            onCompletedTask={handleCompletedTask}
          />
        ))}
      </main>
    </>
  )
}

export default App
