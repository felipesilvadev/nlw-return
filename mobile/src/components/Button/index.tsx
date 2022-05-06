import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator
} from 'react-native';

import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

const Button = ({ isLoading, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator 
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text style={styles.title}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
};

export { Button };