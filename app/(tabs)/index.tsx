import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text,ScrollView,SafeAreaView,StatusBar} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
 import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';



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
  const [value, setValue] = useState(null);

   const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };
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
          <View style={styles.moneyArea}>
           <View style={styles.tabInformationArea}>
           <Text style={styles.tabInfoTextsimCategory}>Prepaid Balance</Text>
           <Text style={styles.tabInfoText}>Rs. 100</Text>
           <Text style={styles.tabInfoTextvalidDate}>Valid Until 30 Mar 2025</Text>
         </View>
         <View style={styles.btnArea}>
         <TouchableOpacity style={styles.transactionButton}>
          <Text style={styles.transactionButtonText}>TRANSACTION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reloadButton}>
          <Text style={styles.reloadButtonText}>RELOAD</Text>
        </TouchableOpacity>
         </View>
      </View>
    
      
        )}
        {selectedTab === 'DATA' && (
           <View style={styles.tabInformationArea}>
           <Text style={styles.tabInfoText}>Prepaid Balance
            Rs. 100.00
            Valid Until 30 Mar 2025</Text>
         </View>

        )}
        {selectedTab === 'VOICE' && (
          <ThemedText>Voice: 300 minutes</ThemedText>
        )}
        {selectedTab === 'SMS' && (
          <ThemedText>SMS: 50 messages</ThemedText>
        )}
        </View>
      </View>
      <View style={styles.row} id='navBar'>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Quick Reload"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      
        renderItem={renderItem}
      />
    </View>
      <View style={styles.row} id='navBar'>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Recomend Data Package"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      
        renderItem={renderItem}
      />
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          Get your new connection
        </ThemedText>
      </View>
      <View style={styles.bannerRow}>
      <Image 
          source={require('@/assets/images/dialogNewConnectionBanner.png')}  
          style={styles.dialogNewConnectionBanner} 
        />
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          RingIN Tones
        </ThemedText>
      </View>
      <View style={styles.bannerRow}>
      <Image 
          source={require('@/assets/images/dialogRinginToneBanner.png')} 
          style={styles.dialogRinginToneBanner} 
        />
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          All Packages
        </ThemedText>
      </View>
      <View>
        <View style={styles.gridCardContainer} id='navBar'>
        <View style={styles.card}>
            <Image 
      source={require('@/assets/images/allPackagesImg/allPackagesComboDataIcon.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboDataIcon.png"
    />
            <ThemedText style={styles.titleBar}>
          Data packages
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/allPackagesImg/allPackagesComboIcon.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Combo packages
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/allPackagesImg/allPackagesVoiceIcon.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Voice add-on
        </ThemedText>                
        </View>
        </View>
      </View>

      <View>
        <ThemedText style={styles.titleBar}>
          Other services
        </ThemedText>
      </View>
      <View>
        <View style={styles.gridCardContainer} id='navBar'>
        <View style={styles.card}>
            <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceShareCredit.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboDataIcon.png"
    />
            <ThemedText style={styles.titleBar}>
          Share credit
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceShareCredit.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Upgrade to postpaid
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceAutoLoan.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Auto Loan
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceEzReloadWallet.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          eZ Reload wallet
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceScratchCard.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Scratch Card
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServicePayAsYouUse.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Pay As You Use
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceMyOffer.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          My Offer
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceMegaWasana.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Mega Wasana
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceESim.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          eSim
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceezCash.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          eZ Cash
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceReloadReserval.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Reload reversal
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceReconnect.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Reconnect
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceDisconnect.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Disconnect
        </ThemedText>                
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/otherServiceImg/otherServiceBlockSMS.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Block SMS
        </ThemedText>                
        </View>
        </View>
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          Value added service
        </ThemedText>
      </View>
      <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollView}
      >
        <View style={styles.internationalSerCard}>
        <Image 
      source={require('@/assets/images/valueAddedService/batting.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Sports
        </ThemedText>                
        </View>
        <View style={styles.internationalSerCard}>
        <Image 
      source={require('@/assets/images/valueAddedService/news.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          News
        </ThemedText>                
        </View>
        <View style={styles.internationalSerCard}>
        <Image 
      source={require('@/assets/images/valueAddedService/medi.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Lifestyle
        </ThemedText>                
        </View>
        <View style={styles.internationalSerCard}>
        <Image 
      source={require('@/assets/images/valueAddedService/gaming.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Video & gaming
        </ThemedText>                
        </View>
        <View style={styles.internationalSerCard}>
        <Image 
      source={require('@/assets/images/valueAddedService/pray.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Religious
        </ThemedText>                
        </View>

      </ScrollView>
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          International Service
        </ThemedText>
      </View>
            <View>
            <View>
      <View style={styles.gridCardContainer} id='navBar'>
        <View style={styles.card}>
            <Image 
      source={require('@/assets/images/internationalService/voiceCall.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboDataIcon.png"
    />
            <ThemedText style={styles.titleBar}>
          Roaming
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/internationalService/videoCall.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          IDD
        </ThemedText>
        </View>

        </View>
      
      </View>
      </View>
      <View>
        <ThemedText style={styles.titleBar}>
          Location Service
        </ThemedText>
      </View>
      <View>
      <View style={styles.gridCardContainer} id='navBar'>
        <View style={styles.card}>
            <Image 
      source={require('@/assets/images/locationService/networkCoverage.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboDataIcon.png"
    />
            <ThemedText style={styles.titleBar}>
          Network coverage
        </ThemedText>
        </View>
        <View style={styles.card}>
        <Image 
      source={require('@/assets/images/locationService/location.png')} 
      style={{ width: 50, height: 40 }} 
      testID="allPackagesComboIcon.png"
    />
                <ThemedText style={styles.titleBar}>
          Locate us
        </ThemedText>
        </View>

        </View>
      
      </View>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabArea:{
    backgroundColor: '#ffffff',
    borderRadius :20,
    height: 250  },
    containerMain: {
    flex: 1,
  },
  header: {
    height: 60,
    borderRadius: 16,
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
    padding: 0,
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
  moneyArea: {
    width: '90%',  // Takes 80% of the parent width
    margin: '0 auto',  // Centers the moneyArea horizontally
    marginTop: '20px',  // Adds a 20px margin to the top
    marginBottom: '30px',  // Adds a 20px margin to the bottom
  },
  
  tabInformationArea: {
    height: 100, // Set height of the area
    width: '100%', // Set width to be the same as its parent container's width
    backgroundColor: '#890166', // Background color
    borderRadius: 16, // Rounded corners
    justifyContent: 'center', // Center content vertically
    alignItems: 'flex-start', // Align content to the left
    paddingLeft: 10, // Padding to add space from the left edge
    paddingRight: 10, // Optional padding to ensure space on the right side
  },
  tabInfoText: {
    color: '#ffffff', // Text color
    fontSize: 22, // Font size
    fontWeight: 'bold', // Font weight
    textAlign: 'left', // Ensure text is aligned to the left
    marginBottom: 4, // Optional: space between lines of text
  },
  tabInfoTextsimCategory: {
    color: '#ffffff', // Text color
    fontSize: 16, // Font size
    textAlign: 'left', // Ensure text is aligned to the left
  },
  tabInfoTextvalidDate: {
    color: '#ffffff', // Text color
    fontSize: 16, // Font size
    textAlign: 'left', // Ensure text is aligned to the left
  },
  btnArea: {

    flexDirection: 'row', // Align buttons side by side
    justifyContent: 'space-between', // Add space between the buttons
    marginBottom: 10, // Optional: Add space above the button area
  },
  
  transactionButton: {
    height:40,
    marginTop: 20, // Optional: space between lines of text
    width:'48%' ,
    borderRadius: 30, // Rounded corners
    borderWidth: 1, // Border thickness
    borderColor: '#808080', // Grey outline color
    backgroundColor: '#ffffff', // White background
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 15, // Horizontal padding for button
  },
  
  reloadButton: {
    height:40,
    marginTop: 20, // Optional: space between lines of text
    width:'48%' ,
    borderRadius: 30, // Rounded corners
    backgroundColor: '#ff0000', // Red background
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 15, // Horizontal padding for button
  },
  
  transactionButtonText: {
    fontSize :17,
    color: '#ff0000', // Red font color
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center text within the button
  },
  
  reloadButtonText: {
    fontSize :17,
    color: '#ffffff', // White font color
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center text within the button
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dialogNewConnectionBanner: {
    height: '100%', // Set the height
    width: '100%',
  },
  dialogRinginToneBanner: {
    height: '100%', // Set the height
    width: '100%',
  },
  bannerRow: {
    backgroundColor: '#ffffff', // Light gray background
    borderRadius: 16, // Rounded corners
    height: 130, // Set the height
    width: '100%', // Set the width, adjust as needed
    padding: 0, // Optional padding for text spacing
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    alignSelf: 'center', // Center the row within its parent container
    marginVertical: 10,
  },
  titleBar: {
    fontSize: 20,        // Example font size
    fontWeight: 'bold',  // Example font weight
    marginTop: 10,       // Example margin top
    marginBottom: 10,    // Example margin bottom
  },
  gridCardContainer: {
    flexDirection: 'row',         // Row-wise layout
    flexWrap: 'wrap',             // Wraps to the next row
    justifyContent: 'space-around', // Space between items
  },
  card: {
    width: '47%',            // Example width
    height: 100,           // Example height
    backgroundColor: '#ffffff', // Example background color
    justifyContent: 'center',   // Centers content vertically
    alignItems: 'center',       // Centers content horizontally
    borderRadius: 10,           // Optional: rounded corners
    shadowColor: '#000',        // Optional: shadow for depth (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,    
    marginBottom: 10           // Optional: shadow for depth (Android)
  },
  cardText: {
    fontSize: 16,               // Example font size
    color: '#333',              // Example text color
  },
  internationalSerCard : {
    width: 130,            // Example width
    height: 100,           // Example height
    backgroundColor: '#ffffff', // Example background color
    justifyContent: 'center',   // Centers content vertically
    alignItems: 'center',       // Centers content horizontally
    borderRadius: 10,           // Optional: rounded corners
    shadowColor: '#000',        // Optional: shadow for depth (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,    
    marginBottom: 10,       
    marginRight: 10  
  }
});

