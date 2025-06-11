import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {SafeAreaView as SafeAreaContext} from 'react-native-safe-area-context';

type SupportedChildren = React.ReactElement | React.ReactElement[] | null;
type TSafeAreaViewChildren = SupportedChildren | SupportedChildren[];

interface ISafeAreaView extends ViewProps {
  vertical?: boolean;
  children: TSafeAreaViewChildren;
}

const SafeAreaView = React.memo(({style, children, vertical = true, ...props}: ISafeAreaView) => {
  return (
    <SafeAreaContext
      style={[styles.view, style]}
      edges={vertical ? ['right', 'left'] : undefined}
      {...props}>
      {children}
    </SafeAreaContext>
  );
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

SafeAreaView.displayName = 'SafeAreaView';

export default SafeAreaView;
