import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: '#252524',
    fontSize: 40,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainContent: {
    height: '50%',
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '3%',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    backgroundColor: '#2F2F2F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  nameContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameBottomBar: {
    marginTop: 2,
    height: 5,
    width: '20%',
    borderRadius: 15,
    backgroundColor: '#DC651A',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  cards: {},
});

export default styles;
