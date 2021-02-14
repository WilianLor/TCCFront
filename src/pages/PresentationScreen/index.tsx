import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { metrics } from '../../styles';
import {
  AppName,
  ButtonContainer,
  ImageContainer,
  PresentationContent,
} from './styles';
import { H0, H1 } from '../../components/Text';

const PresentationScreen: React.FC = () => {
  return (
    <>
      <PresentationContent>
        <AppName>
          <H0 color="primary">Poupp</H0>
        </AppName>
        <ImageContainer>
          <Image
            style={{ width: 600, height: 700, borderRadius: 200 }}
            resizeMode="contain"
            source={require('../../../assets/images/5867-removebg-preview.png')}
          />
        </ImageContainer>
        <H0
          color="white"
          style={{
            marginTop: metrics.base * 3,
            marginLeft: metrics.base * 6,
          }}
        >
          Bora economizar grana?
        </H0>
        <H1
          color="white"
          style={{
            marginLeft: 10,
            textAlign: 'center',
            fontFamily: 'Ubuntu',
            marginTop: metrics.base * 3,
          }}
        >
          É simples, rápido, e fácil.
        </H1>
      </PresentationContent>
      <ButtonContainer>
        <TouchableHighlight>
          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            style={{
              width: 350,
              height: 50,
              borderRadius: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={['#882e13', '#e46e24']}
          >
            <H1 color="white" style={{ fontFamily: 'Ubuntu' }}>
              Já tenho conta!
            </H1>
          </LinearGradient>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            borderColor: 'rgba(228, 110, 36, 1)',
            borderWidth: 1,
            width: 350,
            height: 50,
            borderRadius: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: metrics.base * 3,
          }}
        >
          <H1
            color="primary"
            style={{
              fontFamily: 'Ubuntu',
            }}
          >
            Ainda não tenho conta.
          </H1>
        </TouchableHighlight>
      </ButtonContainer>
    </>
  );
};

export default PresentationScreen;
