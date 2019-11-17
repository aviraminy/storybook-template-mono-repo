import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withCssResources } from '@storybook/addon-cssresources';

// global
addDecorator(withCssResources)
addParameters({
  cssresources: [{
      id: `Catalog ONE`,
      code: `<link rel="stylesheet" type="text/css" href="digitalOneTheme1.css"></link>`,
      picked: false,
    },
  ],
});
 
const storyDecorator = (storyFn, storyObj) => { return (
    <div>
     <h1>{storyObj.name}</h1>
     <div  className={`story story-${storyObj.id}`}>
        {storyFn()}
     </div>
    </div>)};


addDecorator(storyDecorator);
configure([require.context('../stories', true, /\.stories\.js$/)], module);