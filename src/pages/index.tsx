import { Inter } from "next/font/google";
import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Hello() {
  return (
    <Flex direction="column" align="center" p={8}>
      {/* ヘッダー */}
      <Box mb={8} textAlign="center">
        <Heading as="h1" size="2xl">emon</Heading>
        <Text fontSize="lg" color="gray.600">Hosei university student / iyatomi lab / M3</Text>
      </Box>

      {/* プロフィールセクション */}
      <Box mb={8} display="flex" flexDirection="column" alignItems="center">
        <Image 
          borderRadius="full" 
          boxSize="150px" 
          src="/img/skz.jpg"
          alt="Profile Image" 
          mb={4} 
        />
        <Text fontSize="md" color="gray.600">法政大学理工学部応用情報工学科3年生として勉強中</Text>
      </Box>

      {/* ワークセクション */}
      <VStack spacing={4} align="stretch" w="full" maxW="md">
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">PBL report 1</Heading>
          <Text mt={4}>第1回PBLレポート&quot;Linux, GCE, mise, Git/Github, FastAPI&quot;</Text>
          <Button mt={4} colorScheme="teal" onClick={() => window.open('/pdf/第1回レポート.pdf', '_blank')}>
            View
          </Button>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">PBL report 2</Heading>
          <Text mt={4}>第2回PBLレポート&quot;Docker, PostgreSQL, Next.js, Chakra-UI, Vercel&quot;</Text>
          <Button mt={4} colorScheme="teal" onClick={() => window.open('/pdf/第2回レポート.pdf', '_blank')}>
            View
          </Button>
        </Box>
      </VStack>

      {/* コンタクトセクション */}
      <Box mt={8} textAlign="center">
        <Heading as="h3" size="lg">Contact</Heading>
        <VStack mt={4}>
          <Link href="mailto:sugakko0507@gmail.com" color="teal.500">sugakko0507@gmail.com</Link>
        </VStack>
      </Box>

      {/* フッター */}
      <Flex mt={8} p={4} w="full" justifyContent="center" borderTopWidth="1px">
        <Text fontSize="sm" color="gray.600">
          © 2024 emon.
        </Text>
      </Flex>
    </Flex>
  );
}