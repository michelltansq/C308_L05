import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Movies from './Movies.js';
import BoatList from './Boats';
import MovieList from './Movies.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercise</Text>
      <Text>Get A Boat - For Sale</Text>
      <BoatList />
    </ScrollView>
  );
};

export default App;
