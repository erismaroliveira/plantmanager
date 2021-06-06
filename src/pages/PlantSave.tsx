import React from 'react';
import { 
  Alert,
  StyleSheet, 
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Button } from '../components/Button';

import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri=""
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          Nome da Planta
        </Text>

        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate inventore ipsa tempora? Quod, numquam natus. Enim fugit necessitatibus voluptatem ullam sunt ut nemo, alias excepturi minima est doloribus quia vero!
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdrop}
            style={styles.tipImage}
          />

          <Text style={styles.tipText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto impedit blanditiis nesciunt officia id excepturi. Repudiandae dolore autem atque adipisci laboriosam sint nulla molestias eum doloribus placeat! Nulla, vel non!
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button
          title="Cadastrar planta"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  plantAbout: {

  }
});

