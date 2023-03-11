import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Гистограмма" subtitle="Статистика продажи товаров в разных городах" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
