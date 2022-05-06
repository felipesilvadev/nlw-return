import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { api } from '../../libs/api';

import { styles } from './styles';
import { theme } from '../../theme';

import type { FeedbackType } from '../Widget';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCancelled: () => void;
  onFeedbackSent: () => void;
}

const Form = ({ feedbackType, onFeedbackCancelled, onFeedbackSent }: Props) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.error(error));
  };

  const handleScreenshotRemove = () => {    
    setScreenshot(null);
  }

  const handleSendFeedback = async () => {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot: screenshot && `data:image/png;base64, ${screenshotBase64}`,
      });
      
      onFeedbackSent();
    } catch (error) { 
      console.log(error);
      setIsSendingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCancelled}>
          <ArrowLeft weight="bold" size={24} color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput 
        multiline
        autoCorrect={false}
        style={styles.input}
        onChangeText={setComment}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>
    </View>
  );
};

export { Form };