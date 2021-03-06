import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xAxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-02-18T00:00:00.000Z",
      "2022-02-19T00:00:00.000Z",
      "2022-02-20T00:00:00.000Z",
      "2022-02-21T00:00:00.000Z",
      "2022-02-22T00:00:00.000Z",
      "2022-02-23T00:00:00.000Z",
      "2022-02-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box px={["6", "8"]} py={["4", "8"]} bg="gray.800" borderRadius="8">
            <Text>Week subscribers</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box px={["6", "8"]} py={["4", "8"]} bg="gray.800" borderRadius="8">
            <Text>Opening fee</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
