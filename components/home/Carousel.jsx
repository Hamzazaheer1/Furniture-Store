import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import F1 from '../../assets/images/fn1.jpg';
import F2 from '../../assets/images/fn2.jpg';
import F3 from '../../assets/images/fn3.jpg';
import { COLORS } from '../../constants/index';

const Carousel = () => {
  const slides = [F1, F2, F3];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: '93%', marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
