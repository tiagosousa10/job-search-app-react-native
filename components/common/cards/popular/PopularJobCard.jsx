import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  if(!item) return null;
  // console.log('item: ',item.job_id)
  
  return (
    <TouchableOpacity 
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image 
          source={{uri: checkImageURL(item.employer_logo) 
            ? item.employer_logo 
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7hi1eGp0q5S0GrIwIhF2ox2VpuU.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_tittle}</Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
