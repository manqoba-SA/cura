import { View, StyleSheet } from "react-native";
import React from "react";
import {
  Alert,
  Box,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";

export default function CustomAlert({ header, message }) {
  return (
    <View>
      <Center>
        <Alert maxW="400" status="success" colorScheme="success">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  {header}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "coolGray.600",
                }}
              />
            </HStack>
            <Box
              pl="6"
              _text={{
                color: "coolGray.600",
              }}
            >
              {message}
            </Box>
          </VStack>
        </Alert>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({});
