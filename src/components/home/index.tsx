import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcCurrencyExchange,
  FcAssistant,
  FcCollaboration,
  FcTreeStructure,
  FcSynchronize,
} from "react-icons/fc";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const router = useNavigate();

  const animateCards: Variants = {
    initial: {
      y: 25,
    },
    hover: {
      y: -10,
      transition: {
        duration: 1.9,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },

    inView: {
      y: 0,
      transition: {
        duration: 15,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={animateCards}
      initial="initial"
      whileHover="hover"
      whileInView="inView"
    >
      <Box
        maxW={{ base: "full", md: "275px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        onClick={() => router("/wallets")}
        cursor={"pointer"}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
            onClick={() => router("/wallets")}
          >
            Learn more
          </Button>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default function HeroCards() {
  return (
    <Box px={4} py={20} id="features">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Key Features
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Unlock seamless blockchain management with our powerful features.
          Simplify processes, enhance security, and explore new possibilities
          for your digital assets.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Smart Wallet Validation"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Accurate and secure transactions with intelligent address verification and real-time feedback."
            }
            href={"#"}
          />
          <Card
            heading={"Rectification "}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Top-notch encryption, multi-factor authentication, and secure storage for protecting your digital assets."
            }
            href={"#"}
          />
          <Card
            heading={"Staking"}
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            description={
              "Earn rewards by participating in the validation and security of blockchain networks."
            }
            href={"#"}
          />
          <Card
            heading={"Bridge"}
            icon={<Icon as={FcTreeStructure} w={10} h={10} />}
            description={
              "Connect different blockchain networks for seamless interoperability and asset transfer."
            }
            href={"#"}
          />
          <Card
            heading={"Swap"}
            icon={<Icon as={FcSynchronize} w={10} h={10} />}
            description={
              "Instantly exchange cryptocurrencies or digital assets with ease and convenience."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
