import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text,ScrollView,SafeAreaView,StatusBar } from 'react-native';
import { ThemedText } from '@/components/ThemedText';


StatusBar.setBarStyle('dark-content', true);

export default function HomeScreen() {
  const imageUrls = [
    'https://drive.google.com/uc?export=view&id=1_-kE57raG5bUFKIlc7mcLc7_SOPSAXlX',
    'https://drive.google.com/uc?export=view&id=1OnoApGE0DGkwdN2YE1sCttH_2wC3wUI1',
    'https://drive.google.com/uc?export=view&id=1kr1f53ab2BLeYjaXsC7U-UkjBhSbSKHI',
    'https://drive.google.com/uc?export=view&id=1I908Q8Iftv14GVHA2l5do1ikhBRkilZC',
    'https://drive.google.com/uc?export=view&id=1aLbe4BB9lJt1K9TDA8u_rxir9JnS3AB9'
  ];
  
  const imageLinks = [
    'https://example.com/link1',
    'https://example.com/link2',
    'https://example.com/link3',
    'https://example.com/link4',
    'https://example.com/link5'
  ];
  const [selectedTab, setSelectedTab] = useState('Data');

  return (
    
    <SafeAreaView style={styles.containerMain}>
        <View style={styles.header}>
    <View style={styles.headerContent}>
      <Image 
        source={require('@/assets/images/callIcon.png')} 
        style={{ width: 50, height: 40 }} 
        testID="callIconImage" // Replace `id` with `testID`
      />
      <Text style={styles.mobileNumber}>+1234567890</Text>
    </View>
  </View>
      <ScrollView style={styles.scrollViewMain}>


      
      <View style={styles.container}>
      {/* Scrollable Row for Images */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollView}
      >
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
      </ScrollView>
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
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
            <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
      <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
            <View style={styles.row} id='navBar'>
        <ThemedText>
          07772899876
          {'\n'}
          Connected
        </ThemedText>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerContent: {
    flexDirection: 'row', // Places the items in a row
    alignItems: 'center', // Vertically centers the items
  },
  mobileNumber: {
    fontSize: 16,
    marginLeft: 10, // Adds space between the icon and the text
  },
  scrollViewMain: {
    flex: 1,
  },
  callIconImage: {
    width: 50,
    height: 40,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [
      { translateX: -25 },  // Half of the width to center horizontally
      { translateY: -20 },  // Half of the height to center vertically
    ],
  },




  scrollViewMain: {
    backgroundColor: 'pink',
    marginHorizontal: 0,
  },
  statusBar: {
    height: '10%', // Takes up 10% of the container height
    backgroundColor: '#f0f0f0', // Optional: for better visualization
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  gridContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1, // Ensures row takes remaining space
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: 350, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginRight: 10, // Space between images
    resizeMode: 'cover',
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
  container: {
    flex: 1, // Ensures container takes full height
    flexDirection: 'column',
  },
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
