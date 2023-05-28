import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  img: string;
  value: string;
  tags: string[];
}

export default function Card({ title, img, tags, value }: Props) {
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
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        onClick={() => router(`/import?wallet=${value}`)}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black" p={4}>
          <Img
            src={img}
            borderRadius="full"
            objectFit="contain"
            h="full"
            w="full"
            alt={"token Image"}
          />
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {title}
          </Heading>
          <Box display={"inline-flex"} color="white" mt={2}>
            {tags.map((tag) => (
              <Text
                bg="black"
                mr={2}
                key={tag}
                px={2}
                py={1}
                fontSize={"xs"}
                fontWeight="medium"
              >
                {tag}
              </Text>
            ))}
          </Box>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
            onClick={() => router(`/import?wallet=${value}`)}
          >
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Connect
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            borderLeft={"1px"}
          >
            <FiLock size="18px" />
          </Flex>
        </HStack>
      </Box>
    </motion.div>
  );
}
