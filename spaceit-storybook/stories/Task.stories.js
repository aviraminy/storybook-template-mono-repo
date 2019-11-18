import React from 'react';
import {Task} from 'spaceit-components';


  
export default {
    title: 'Task',
    components: Task
  };

export const simpleStory = () => 
  <>
    <Task description='Buy food'/>
    <Task urgent description= 'Buy weed !!!'/>
  </>;