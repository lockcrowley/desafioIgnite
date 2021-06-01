import React, { useState } from 'react';
import { Alert, Switch, StyleSheet, View } from 'react-native';

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
  const [darktheme, setDarkTheme] = useState<boolean>(false)

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
    <View style = {[styles.container, (darktheme ? {backgroundColor:'#1F1F1F'}: {backgroundColor:"#FFF"})]}>
      
      <Header darktheme={darktheme} />

      <Switch
        style={darktheme ? styles.switchDark : styles.switch}
        trackColor={{ false: "#757577", true: "#9347CA"}}
        thumbColor={darktheme ? "#9347CA" : "#f4f3f4"}
        onValueChange={() => setDarkTheme(oldState => !oldState)}
        value={darktheme}
      />
      <TodoInput darkTheme={darktheme} addTask={handleAddTask} />
      <MyTasksList 
        darkTheme={darktheme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-start',
    width:'100%',
    height:'100%',
    
   
  },
  switch:{
    backgroundColor: '#273FAD',
    position:'absolute',
    left:315,
    top:30,
    
    
  },
  switchDark:{
    position:'absolute',
    left:315,
    top:30,
    backgroundColor: '#282B5A',
  }
});