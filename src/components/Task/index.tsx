import { Check, Trash } from 'phosphor-react';
import styles from './styles.module.scss';

interface TaskCardProps {
  id: string,
  content: string,
  isCompleted: boolean,
  onDeleteTask: (id: string) => void;
  onCompletedTask: (id: string) => void;
}

export function Task({ id, content, isCompleted, onDeleteTask, onCompletedTask }: TaskCardProps) {
  return (
    <div className={styles.task}>
      <label>
        <input type="checkbox" className={styles.toggleInput} />
        <button onClick={() => onCompletedTask(id)} className={styles.checkbox}>
          <Check size={14} weight="bold" />
        </button>
      </label>
      <p className={isCompleted ? styles.checked : ''}>{content}</p>
      <button type="button" onClick={() => onDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}