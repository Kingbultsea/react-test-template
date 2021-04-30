import React from 'react'
import TestClassComponent from './classComponent'

function Hello({ greeting, name }) {
  return <h1>{greeting}, {name}!</h1>;
}

export default <Hello greeting="Aloha" name="Alexa" />;
