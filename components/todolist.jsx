    /**
 * My To Do List App
 *
 * @format
 */

    import React from 'react';
    import {
      SafeAreaView,
      StyleSheet,
      Pressable,
      View,
      Text,
      ScrollView      
    } from 'react-native';
    
export default function ToDoList({items})
{



  

  return (
    <SafeAreaView>
      {items.map((value,index)=> {
        return(
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={[styles.taskText]}>
                {value}
              </Text>
            </View>
          </Pressable>
        )
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
    
  }
});


