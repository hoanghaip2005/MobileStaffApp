import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BulletListProps {
  items: Array<string | React.ReactNode>;
  bulletSize?: number;
  bulletColor?: string;
  bulletOpacity?: number;
  gapBetweenBulletAndText?: number;
  gapBetweenItems?: number;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  bulletTopOffset?: number;
}

export function BulletList({
  items,
  bulletSize = 6,
  bulletColor = '#111927',
  bulletOpacity = 1,
  gapBetweenBulletAndText = 8,
  gapBetweenItems = 12,
  textStyle,
  containerStyle,
  bulletTopOffset = 6,
}: BulletListProps) {
  return (
    <View style={[styles.container, { rowGap: gapBetweenItems }, containerStyle]}> 
      {items.map((item, index) => (
        <View key={index} style={[styles.row, { columnGap: gapBetweenBulletAndText }]}> 
          <View
            style={{
              width: bulletSize,
              height: bulletSize,
              borderRadius: bulletSize / 2,
              backgroundColor: bulletColor,
              opacity: bulletOpacity,
              marginTop: bulletTopOffset,
            }}
          />
          {typeof item === 'string' ? <Text style={textStyle}>{item}</Text> : item}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});


