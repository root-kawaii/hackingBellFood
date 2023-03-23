import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = () => {
  const [elementVisible, setElementVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {elementVisible ? (
          <View
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Hello world!</Text>
          </View>
        ) : null}
        <Button
          title={elementVisible ? 'Hide Element' : 'Show Element'}
          onPress={() => setElementVisible(!elementVisible)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
