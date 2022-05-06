import React from 'react';
import { 
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import successImg from '../../assets/success.png';

import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

const Success = ({ onSendAnotherFeedback }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>
          Quero enviar outro feedback
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
};

export { Success };