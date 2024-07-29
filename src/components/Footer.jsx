import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Stay informed and make smarter decisions with Xcrypto, your comprehensive source for real-time cryptocurrency data and in-depth guides to the best crypto exchange platforms.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"] src = "https://i.imgur.com/E5kxgmH.png"}  />
          <Text>Pranjay Seksaria</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
