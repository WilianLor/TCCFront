import {StyleSheet} from 'react-native'
import styled from 'styled-components/native';

import metrics from '../../styles/variables/metrics'

export const styles = StyleSheet.create({
    boxShadow: {
      shadowColor: "#000", 
      shadowOffset: { 
        width: 0, 
        height: 5,
      }, 
      shadowOpacity: 0.32, 
      shadowRadius: 5.46,
      
      elevation: 4,
    }
  }
)

export const HomePage = styled.View`
  background-color: #252524;
  width: ${metrics.wp(100)}px;
  height: ${metrics.hp(100)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: ${metrics.hp(15)}px;
`

export const MainContent = styled.View`
  height: ${metrics.hp(55)}px;
  width: ${metrics.wp(100)}px;
  padding-left: ${metrics.wp(7)}px;
  padding-right: ${metrics.wp(7)}px;
  padding-top: ${metrics.wp(7)}px;
  border-bottom-right-radius: ${metrics.base * 12.5}px;
  border-bottom-left-radius: ${metrics.base * 12.5}px;
  background-color: #2F2F2F;
`

export const NameText = styled.Text`
  font-size: ${metrics.base * 5}px;
  font-weight: bold;
  color: #fff;
`

export const NameContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: ${metrics.base * 2}px;
`

export const NameBottonBar = styled.View`
  margin-top: ${metrics.base / 2}px;
  height: ${metrics.base * 1.25}px;
  width: ${metrics.wp(37)}px;
  border-radius: ${metrics.base * 4}px;
  background-color: #DC651A;
`

export const BalanceContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.base * 5}px;
`

export const BalanceLeftBar = styled.View`
  width: ${metrics.base * 2}px;
  height: ${metrics.base * 11}px;
  background-color: #DC651A;
  border-radius: ${metrics.base * 4}px;
  margin-right: ${metrics.base * 2.5}px;
`

export const BalanceText = styled.Text`
  font-size: ${metrics.base * 9}px;
  font-weight: bold;
  color: #fff;
`

export const SubTitles = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const SubTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SubTitleColor = styled.View`
  width: ${metrics.base * 3.5}px;
  height: ${metrics.base * 3.5}px;
  border-radius: ${metrics.base * 2}px;
  margin-right: ${metrics.base * 1.25}px;
`

export const SubTitleText = styled.Text`
  font-size: ${metrics.base * 3.5}px;
  font-weight: bold;
  color: #fff;
`

export const SeeMoreContent = styled.View`
  width: 100%;
  align-items: center;
`

export const SeeMore = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: ${metrics.base * 2.5}px;
  font-size: ${metrics.base * 3.5}px;
`

export const CardsContainer = styled.View`
  height:${metrics.base * 43}px;
`

export const Cards = styled.ScrollView`
  width: ${metrics.wp(90)}px;
  margin-left: ${metrics.wp(5)}px;
  height: ${metrics.base * 125}px;
  margin-right: ${metrics.wp(5)}px;
  border-radius: ${metrics.base * 7.5}px;
`

export const Card = styled.View`
  width: 100%;
  height: ${metrics.base * 41}px;
  margin-top: ${metrics.base * 1}px;
  margin-bottom: ${metrics.base * 1}px;
  background-color: #2F2F2F;
  border-radius: ${metrics.base * 7.5}px;
`
