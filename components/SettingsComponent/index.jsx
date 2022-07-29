import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SettingsComponent = (SettingsOptions) => {
  return (
      <Container>
          {SettingsOptions.map(({ title, subTitle,onPress, index}) => <TouchableOpacity key={title}>
              <View>
                  <Text>{title}</Text>
                  {subTitle && <Text>{subTitle}</Text>}
              </View>

              <View style/>
          </TouchableOpacity>)}
  </Container>
  )
}

export default SettingsComponent