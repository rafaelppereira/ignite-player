import styles from './styles.module.scss';

interface TitleProps {
  numberOfTasks: number,
  numberOfTasksCompleted: number,
}

export function Title({ 
  numberOfTasks, 
  numberOfTasksCompleted, 
}: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span>{numberOfTasks}</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
        <span>{numberOfTasksCompleted} de {numberOfTasks}</span>
      </div>
    </div>
  );
}