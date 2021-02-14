import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import metrics from '../../styles/variables/metrics'

import {HomePage , Card, CardsContainer ,Cards, SeeMoreContent,SubTitles, SubTitle, SubTitleColor, SubTitleText, MainContent, SeeMore, NameContent, NameText, NameBottonBar, BalanceContent, BalanceLeftBar, BalanceText, styles} from './styles';

import { FontAwesome } from '@expo/vector-icons'; 

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
  ];

  return (
    <HomePage >
      <MainContent style={styles.boxShadow}>
        <NameContent>
          <NameText>Wilian Lorencetto</NameText>
          <NameBottonBar />
        </NameContent>
        <BalanceContent>
          <BalanceLeftBar />
          <BalanceText>R$ 1.945,00</BalanceText>
        </BalanceContent>
        <PieChart
          style={{ height: metrics.base * 40 }}
          outerRadius={'70%'}
          innerRadius={10}
          data={data}
        />
        <SubTitles>
          <SubTitle>
            <SubTitleColor style={{backgroundColor: '#DC651A'}}/>
            <SubTitleText>Alimentação</SubTitleText>
          </SubTitle>
          <SubTitle>
            <SubTitleColor style={{backgroundColor: '#DC653A'}}/>
            <SubTitleText>Alimentação</SubTitleText>
          </SubTitle>
          <SubTitle>
            <SubTitleColor style={{backgroundColor: '#DC655A'}}/>
            <SubTitleText>Alimentação</SubTitleText>
          </SubTitle>
        </SubTitles>
        <SeeMoreContent>
          <SeeMore onPress={() => {console.log('AA')}}>Ver mais <FontAwesome name="arrow-right" size={10} color="#fff" /></SeeMore>
        </SeeMoreContent>
      </MainContent>
      <CardsContainer>
        <Cards pagingEnabled>
          <Card style={styles.boxShadow}>

          </Card>
          <Card style={styles.boxShadow}>
                
          </Card>
          <Card style={styles.boxShadow}>

          </Card>
          <Card style={styles.boxShadow}>
                
          </Card>
        </Cards>
      </CardsContainer>
    </HomePage>
  );
};

export default home;
