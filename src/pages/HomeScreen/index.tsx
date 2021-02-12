import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import styles from './styles';

import NavBar from '../../components/navbar';

const home: React.FC = () => {
  const data = [
    {
      key: 1,
      value: 45,
      svg: { fill: '#DC651A' },
      arc: { outerRadius: '130%', cornerRadius: 10 },
    },
    {
      key: 2,
      value: 15,
      svg: { fill: '#DC653A' },
    },
    {
      key: 3,
      value: 25,
      svg: { fill: '#DC655A' },
    },
    {
      key: 4,
      value: 25,
      svg: { fill: '#DC655A' },
    },
  ];

  return (
    <View style={styles.homePage}>
      <View style={styles.mainContent}>
        <View style={styles.nameContent}>
          <Text style={styles.nameText}>Wilian Lorencetto</Text>
          <View style={styles.nameBottomBar} />
        </View>
        <PieChart
          style={{ height: 250 }}
          outerRadius={'70%'}
          innerRadius={10}
          data={data}
        />
      </View>
      <NavBar page="home" />
    </View>
  );
};

export default home;
