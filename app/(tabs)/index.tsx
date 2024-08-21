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
      testID="callIconImage"
    />
    <View style={styles.textContainer}>
      <Text style={styles.mobileNumber}>0777******</Text>
      <Text style={styles.status}>    Connected</Text>
    </View>
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

      <View style={styles.tabArea}>
      {/* Tab Header */}
      <View style={styles.tabContainer}>
        {['MONEY', 'DATA', 'VOICE', 'SMS'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[
              styles.tab, 
              selectedTab === tab && styles.activeTab
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[
              styles.tabText, 
              selectedTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {selectedTab === 'MONEY' && (
          <ThemedText>Money: $100</ThemedText>
        )}
        {selectedTab === 'DATA' && (
          <ThemedText>Data: 12345</ThemedText>
        )}
        {selectedTab === 'VOICE' && (
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
  tabArea:{},
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
  textContainer: {
    flexDirection: 'column', // Arranges the two texts in a column
    marginLeft: 10, // Space between the icon and the text
  },
  mobileNumber: {
    fontSize: 20,
    marginLeft: 10, // Adds space between the icon and the text
    fontWeight: 'bold',
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

  status: {
    fontSize: 14,
    color: 'green', // Optional: adds color to the "Connected" text
  },


  scrollViewMain: {
    
    marginHorizontal: 10,
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
    backgroundColor: '#ffffff', // Light gray background
    borderRadius: 16, // Rounded corners
    height: 60, // Set the height
    width: '100%', // Set the width, adjust as needed
    padding: 10, // Optional padding for text spacing
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    alignSelf: 'center', // Center the row within its parent container
    marginVertical: 10, // Optional margin for spacing
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
    fontSize: 20
  },
  container: {
    flex: 1, // Ensures container takes full height
    flexDirection: 'column',
  },
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 13, // Adds space to the left and right of the children
    paddingBottom: 16,
  },
  
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff', // Background color for the tab bar
    borderRadius: 10,
    overflow: 'hidden', // Ensures the corners are rounded
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#ffffff', // Background color for the active tab
    borderBottomWidth: 3, // Underline thickness
    borderBottomColor: '#890166', // Underline color
    color: '#890166', // Default text color
  },
  activeTabText: {
    color: '#890166', // Green text color for the active tab
  },
  tabText: {
    color: '#808080', // Default text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

