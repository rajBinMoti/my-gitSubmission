import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ControlBtn from './components/ControlBtn';
import DisplayComponent from './components/DisplayComponent';
import NumberBtn from './components/NumberBtn';

export default function App() {
  const [equation, setEquation] = React.useState(0);

  const updateEquation = (digit) => {
    setEquation(equation + digit);
  }

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <DisplayComponent equ={equation} />
      </View>
      {/* Controls */}
      <View style={styles.controls}>
        <View style={styles.rowTypeA}>
          <ControlBtn name="MC" bgStyles={{ backgroundColor: '#777' }} />
          <ControlBtn name="MR" bgStyles={{ backgroundColor: '#777' }} />
          <ControlBtn name="M+" styles={{ color: '#fff' }} />
          <ControlBtn name="M-" styles={{ color: '#fff' }} />
          <ControlBtn name="MS" styles={{ color: '#fff' }} />
          <ControlBtn name="M^" bgStyles={{ backgroundColor: '#777' }} />
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="%" />
          <NumberBtn name="CE" />
          <NumberBtn name="C" />
          <NumberBtn name="(X)" />
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="1/x" />
          <NumberBtn name="x^2" />
          <NumberBtn name="x^(1/2)" />
          <NumberBtn name="/" />
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="7" updateFun={updateEquation}/>
          <NumberBtn name="8" updateFun={updateEquation}/>
          <NumberBtn name="9" updateFun={updateEquation}/>
          <NumberBtn name="X" updateFun={updateEquation}/>
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="4" updateFun={updateEquation}/>
          <NumberBtn name="5" updateFun={updateEquation}/>
          <NumberBtn name="6" updateFun={updateEquation}/>
          <NumberBtn name="-" updateFun={updateEquation}/>
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="1" updateFun={updateEquation}/>
          <NumberBtn name="2" updateFun={updateEquation}/>
          <NumberBtn name="3" updateFun={updateEquation}/>
          <NumberBtn name="+" updateFun={updateEquation}/>
        </View>
        <View style={styles.rowTypeB}>
          <NumberBtn name="+/-" updateFun={updateEquation}/>
          <NumberBtn name="0" updateFun={updateEquation}/>
          <NumberBtn name="." updateFun={updateEquation}/>
          <NumberBtn name="=" updateFun={updateEquation}/>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
  },
  display: {
    flex: 2,
    backgroundColor: '#ade',
  },
  controls: {
    flex: 8,
    backgroundColor: '#fd9',
  },
  rowTypeA: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
    backgroundColor: "#fb9"
  },
  rowTypeB: {
    flex: 2,
    flexDirection: 'row',
    margin: 1,
    backgroundColor: "#fb1"
  }
});
