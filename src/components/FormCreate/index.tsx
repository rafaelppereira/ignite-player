import { PlusCircle } from 'phosphor-react';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import styles from './styles.module.scss';

interface FormCreateProps {
  onCreateNewTask: (value: string) => void;
  changeInput: string;
  setChangeInput: Dispatch<SetStateAction<string>>;
}

export function FormCreate({ onCreateNewTask, changeInput, setChangeInput}: FormCreateProps) {
  return (
    <form className={styles.formCreate} > 
      <input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button" onClick={() => onCreateNewTask(changeInput)}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}