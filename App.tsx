import {
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { DropDownComponentProvider } from '@hooks/dropdown';
import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import theme from '@theme/index';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_300Light,
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });
  return (
    <DropDownComponentProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <NavigationContainer>
            <AppProvider>
              {fontsLoaded ? (
                <View style={styles.container}>
                  <Routes />
                </View>
              ) : (
                <ActivityIndicator color="red" size={30} />
              )}
            </AppProvider>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </DropDownComponentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
