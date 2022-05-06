import React from 'react';
import { View, Text } from 'react-native';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

import type { FeedbackType } from '../Widget';

interface Props {
  onFeedbackChanged: (feedbackType: FeedbackType) => void;
}

const Options = ({ onFeedbackChanged }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackChanged(key as FeedbackType)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
};

export { Options };