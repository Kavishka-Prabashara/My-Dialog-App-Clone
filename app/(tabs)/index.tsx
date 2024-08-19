import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('Data');

  return (
    <View style={styles.gridContainer}>

      <View style={styles.row}>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      
      <View style={styles.row}>
        <Image 
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1_-kE57raG5bUFKIlc7mcLc7_SOPSAXlX'}} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1OnoApGE0DGkwdN2YE1sCttH_2wC3wUI1' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1kr1f53ab2BLeYjaXsC7U-UkjBhSbSKHI' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1I908Q8Iftv14GVHA2l5do1ikhBRkilZC' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1aLbe4BB9lJt1K9TDA8u_rxir9JnS3AB9' }} 
          style={styles.image} 
        />
      </View>
      
      <View style={styles.row}>
        <ThemedText>
          Here's Info as at 12:26PM, Today. Pull to refresh.
        </ThemedText>
      </View>

      {/* Tab Header */}
      <View style={styles.tabContainer}>
        {['Money', 'Data', 'Voice', 'SMS'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[
              styles.tab, 
              selectedTab === tab && styles.activeTab
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {selectedTab === 'Money' && (
          <ThemedText>Money: $100</ThemedText>
        )}
        {selectedTab === 'Data' && (
          <ThemedText>Data: 12345</ThemedText>
        )}
        {selectedTab === 'Voice' && (
          <ThemedText>Voice: 300 minutes</ThemedText>
        )}
        {selectedTab === 'SMS' && (
          <ThemedText>SMS: 50 messages</ThemedText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 180, // Adjust the height as needed
    resizeMode: 'cover', // Adjust the image scaling mode
    marginHorizontal: 5, // Add margin between images
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ddd',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF', // Active tab indicator color
  },
  tabText: {
    fontSize: 16,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
