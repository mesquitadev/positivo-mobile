import { CartProvider } from '@hooks/useCart';
import { useLoading } from '@hooks/useLoading';
import theme from '@theme/index';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AuthProvider } from './auth';

function AppProvider({ children }) {
  const { loading } = useLoading();
  return (
    <AuthProvider>
      <CartProvider>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator color={theme.colors.primary} size={20} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </CartProvider>
    </AuthProvider>
  );
}

export default AppProvider;
