import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export const ContactItem = ({ item, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{ position: 'relative' }}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineDot} />}
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 12, marginHorizontal: 16, marginVertical: 4, borderRadius: 14 },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12, backgroundColor: '#E2E8F0' },
  onlineDot: { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: 6, backgroundColor: '#10B981', borderWidth: 2, borderColor: '#FFF' },
  name: { fontSize: 16, color: '#0F172A', fontWeight: '500' },
});