import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export const SettingsScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    Alert.alert('Xác nhận', 'Bạn muốn đăng xuất?', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Đăng xuất', style: 'destructive', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }) }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Cài đặt</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Nguyễn Hồng Khánh</Text>
        <Text style={styles.email}>it.student@ptit.edu.vn</Text>
      </View>
      
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  headerTitle: { fontSize: 26, fontWeight: '800', marginHorizontal: 16, marginTop: 12, color: '#0F172A' },
  card: { backgroundColor: '#FFF', padding: 16, margin: 16, borderRadius: 14, alignItems: 'center' },
  name: { fontSize: 18, fontWeight: '700', color: '#0F172A', marginBottom: 4 },
  email: { fontSize: 14, color: '#64748B' },
  logoutBtn: { backgroundColor: '#FEE2E2', marginHorizontal: 16, padding: 14, borderRadius: 12, alignItems: 'center' },
  logoutText: { color: '#EF4444', fontSize: 16, fontWeight: '700' },
});