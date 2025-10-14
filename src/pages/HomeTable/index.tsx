import ButtonCustom from "@/components/Button";
import StatisticsChart from "@/components/charts/StatisticCard";
import { fakeIndicators } from "@/constants/fakeData";
import { ROUTER } from "@/constants/routes";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/common.module.css';
import MainTable from "./components/MainTable";

export default function HomeTable() {
  const navigate = useNavigate()
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate(ROUTER.HOME)}>
        <StatisticsChart />
      </div>
      <div className={styles.content_top}>
        <Flex justify="space-between" align="center">
          <Flex gap={8}>
            <ButtonCustom
              customVariant="table"
              btnSize={"small"}
            >
              Ixrac et
            </ButtonCustom>
          </Flex>
          <Flex gap={8}>
            <ButtonCustom
              customVariant="table"
              btnSize={"small"}
            >
              Axtar
            </ButtonCustom>
            <ButtonCustom
              customVariant="table"
              btnSize={"small"}
            >
              Ayarlar
            </ButtonCustom>
          </Flex>
        </Flex>
      </div>
      <div className={styles.content_box}>

        <MainTable
          loading={false}
          data={fakeIndicators}
          currentPage={1}
        />

      </div>
    </div>
  )
}
