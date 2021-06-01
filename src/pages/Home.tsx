import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(newTaskTitle: string) {
      
    if(newTaskTitle === ''){
      return Alert.alert('Por favor digite uma tarefa')
    }
    
    const data = {
      id: Number(new Date().getTime()),
      title: newTaskTitle,
      done: false
    }  

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {

    const taskDone = tasks.map(item => {
      if(item.id === id) {
        item.done = !item.done
      }

      return item

    })

    setTasks(taskDone)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}