import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet, View} from 'react-native';
import sharedStyles from '../screens/Styles';
import {useTheme} from '@/theme';
import {themes} from '@/lib/constants';
import KeyboardView from './KeyboardView';
import scrollPersistTaps from '@/lib/methods/helpers/scrollPersistTaps';
import StatusBar from './StatusBar';
import SafeAreaView from './SafeAreaView';

interface IFormContainer extends ScrollViewProps {
  testID?: string;
  children: React.ReactElement | React.ReactElement[] | null;
  // showAppVersion?: boolean;
}

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
  },
});

export const FormContainerInner = ({
  children,
  accessibilityLabel,
}: {
  children: (React.ReactElement | null)[];
  accessibilityLabel?: string;
}) => (
  <View
    accessibilityLabel={accessibilityLabel}
    style={
      sharedStyles.container
      //  isTablet && sharedStyles.tabletScreenContent
    }>
    {children}
  </View>
);

const FormContainer = ({
  children,
  testID,
  // showAppVersion = true,
  ...props
}: IFormContainer) => {
  const {theme} = useTheme();

  return (
    <KeyboardView
      style={{backgroundColor: themes[theme].surfaceRoom}}
      contentContainerStyle={sharedStyles.container}
      keyboardVerticalOffset={128}>
      <StatusBar />
      <ScrollView
        style={sharedStyles.container}
        contentContainerStyle={[sharedStyles.containerScrollView, styles.scrollView]}
        {...scrollPersistTaps}
        {...props}>
        <SafeAreaView testID={testID} style={{backgroundColor: themes[theme].surfaceRoom}}>
          {children}
          {/* <>{showAppVersion && <AppVersion theme={theme} />}</> */}
        </SafeAreaView>
      </ScrollView>
    </KeyboardView>
  );
};

export default FormContainer;
