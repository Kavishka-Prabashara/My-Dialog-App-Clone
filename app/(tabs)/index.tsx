import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <View style={styles.gridContainer}>

      <View style={styles.row}>
        <ThemedText>
          07772899876
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

      {/* Row 2: Data Row */}
      <View style={styles.row}>
        <ThemedText>Data: 12345</ThemedText>
      </View>

      {/* Row 3: Currency Row */}
      <View style={styles.row}>
        <ThemedText>Currency: USD</ThemedText>
      </View>

      {/* Add more rows here as needed */}
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
    height: 200, // Adjust the height as needed
    resizeMode: 'cover', // Adjust the image scaling mode
  },
});
