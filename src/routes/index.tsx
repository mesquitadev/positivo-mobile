import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import PublicRoutes from './PublicRoutes';

function Routes() {
  // if (loading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }
  // return user ? <AuthRoutes /> : <PublicRoutes />;
  return <PublicRoutes />;
}

export default Routes;
