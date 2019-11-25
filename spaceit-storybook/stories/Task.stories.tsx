import React from 'react';
import {Task} from 'spaceit-components';
import { text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'TS Task',
    components: Task
};
export const playground = () => 
  <Task urgent={boolean('urgent',false)}  description={text('description','Buy weed !!!')}/>;

export const combinations = () => 
  <>
    <Task description='Buy food'/>
    <Task urgent description= 'Buy me some weed !!!'/>
  </>;

