import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withCssResources } from '@storybook/addon-cssresources';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from "@storybook/addon-knobs";

const storyDecorator = (storyFn, storyObj) => { return (
  <div>
   <h1>{storyObj.name}</h1>
   <div  className={`story story-${storyObj.id}`}>
      {storyFn()}
   </div>
  </div>)};

addDecorator(storyDecorator);
addDecorator(withKnobs);
addDecorator(withCssResources);
addDecorator(withInfo({
  inline: true,
  header: false,
})) 
addParameters({
  options: {
    panelPosition: 'right'
  },
  cssresources: [{
      id: `Catalog ONE`,
      code: `<link rel="stylesheet" type="text/css" href="digitalOneTheme1.css"></link>`,
      picked: false,
    },
  ],
});
 


configure([require.context('../stories', true, /\.stories\.tsx$/),], module);