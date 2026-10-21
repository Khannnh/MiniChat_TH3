import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import { MOCK_CHATS } from '../data'; 
import { ChatItem } from '../components/ChatItem';
import { SearchBar } from '../components/SearchBar';

export const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const data = MOCK_CHATS.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Trò chuyện</Text>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem item={item} onPress={() => navigation.navigate('ChatDetail', { name: item.name })} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  headerTitle: { fontSize: 26, fontWeight: '800', marginHorizontal: 16, marginTop: 12, color: '#0F172A' },
});