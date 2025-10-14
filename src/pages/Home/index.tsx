import CloudIcon from "@/assets/icon/CloudIcon"
import DropIcon from "@/assets/icon/DropIcon"
import ElectricIcon from "@/assets/icon/ElectricIcon"
import GasStationIcon from "@/assets/icon/GasStationIcon"
import HelpIcon from "@/assets/icon/HelpIcon"
import LighteningIcon from "@/assets/icon/LighteningIcon"
import StatisticDown from "@/assets/icon/StatisticDown"
import StatisticNormal from "@/assets/icon/StatisticNormal"
import StatisticUp from "@/assets/icon/StatisticUp"
import UsersIcon from "@/assets/icon/UsersIcon"
import BarStatistics from "@/components/charts/BarChart"
import SparkStatistics from "@/components/charts/CountIcon"
import CrashStatistics from "@/components/charts/CrashCount"
import MiniStatistics from "@/components/charts/MiniStatistics"
import MiniStatistics2 from "@/components/charts/MiniStatistics2"
import ProgressStatistics from "@/components/charts/ProgressStatistic"
import RawChart from "@/components/charts/RawChart"
import StatisticsChart from "@/components/charts/StatisticCard"
import TechnologyLossChart from "@/components/charts/TechnologyLossChart"
import { ROUTER } from "@/constants/routes"
import { Col, Flex, Row } from "antd"
import { useNavigate, useSearchParams } from "react-router-dom"
import styles from "../../styles/common.module.css"
import WidgetTable from "./components/WidgetTable"



const chartData = [
    { value: 5 },
    { value: 12 },
    { value: 4 },
    { value: 10 },
    { value: 8 },
    { value: 15 },
];
const barData = [
    { day: "M", value: 10 },
    { day: "T", value: 30 },
    { day: "W", value: 25 },
    { day: "T", value: 20 },
    { day: "F", value: 12, active: true },
    { day: "S", value: 28 },
    { day: "S", value: 30 },
];

export default function Home() {
    const navigate = useNavigate()
    const randomValue = (min: number, max: number, fixed = 1) =>
        (Math.random() * (max - min) + min).toFixed(fixed);

    const [searchParams] = useSearchParams();
    const startDate = searchParams.get("startDate");
    const isRandom = Boolean(startDate);
   
    return (
        <>
            <div className={styles.home_content}>
                <Flex gap={24} vertical>
                    <div style={{ cursor: "pointer" }} onClick={() => navigate(ROUTER.HOMETABLE)}>
                        <StatisticsChart  />
                    </div>
                    <Row gutter={24}>
                        <Col span={12}>
                             <MiniStatistics2
                                icon={<StatisticUp />}
                                title="İqtisadi tövhə"
                                color="green"
                                value={isRandom ? randomValue(4000, 7000, 1) : "5.951,0"}
                                unit="₼"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(50, 70, 2)}%` : "12%"}
                            />
                        </Col>
                        <Col span={12}>
                             <MiniStatistics2
                                icon={<StatisticUp />}
                                title="Ödənilən vergi"
                                color="green"
                                value={isRandom ? randomValue(4000, 7000, 1) : "5.951,0"}
                                unit="₼"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(50, 70, 2)}%` : "12%"}
                            />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <TechnologyLossChart
                            />
                        </Col>
                        <Col span={12}>
                            <RawChart />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <MiniStatistics
                                icon={<StatisticDown />}
                                title="1 kvts elektrik enerjisinin buraxılışına təbii qazın sərfi"
                                color="red"
                                value={isRandom ? randomValue(0.1, 1) : "0,219"}
                                unit="m3"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(-5, 5)}` : "-1"}
                            />
                        </Col>
                        {/* <Col span={8}>
                            <MiniStatistics
                                icon={<StatisticDown />}
                                title="Ştat sayının optimallaşdırılması və səmərəliliyin artırılması"
                                color="red"
                                value={isRandom ? randomValue(1000, 2000) : "1.805,3 "}
                                unit="nəfər"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(-5, 5)}%` : "-1%"}
                            />
                        </Col> */}
                        <Col span={12}>
                            <MiniStatistics
                                icon={<StatisticNormal />}
                                title="1kvts elektrik enerjisinin istehsalının maya dəyəri (Amortizasiyasız)"
                                color="green"
                                value={isRandom ? randomValue(2, 6) : "3,5 "}
                                unit="qəpik/kVts"
                                statusText="Natamam"
                                percent={isRandom ? `${randomValue(-3, 3)}` : "1"}
                            />
                        </Col>
                    </Row>
                    <WidgetTable />
                    <Row gutter={24}>
                        <Col span={8}>
                            <MiniStatistics2
                                icon={<LighteningIcon />}
                                title="Elektrik enerjisinin istehsalı"
                                color="red"
                                value={isRandom ? randomValue(4000, 7000, 1) : "5.951,0"}
                                unit="min MVt/s"
                                statusText="Çox pis"
                                percent={isRandom ? `${randomValue(-20, 0, 0)}%` : "-12%"}
                            />
                        </Col>
                        <Col span={8}>
                            <MiniStatistics2
                                icon={<HelpIcon />}
                                title="Elektrik enerjisinin istehsalında xüsusi sərfiyyat"
                                color="green"
                                value={isRandom ? randomValue(100, 180, 1) : "133,5"}
                                unit="min MVt/s"
                                statusText="Əla"
                                percent={isRandom ? `${randomValue(-15, 0, 0)}%` : "-8%"}
                            />
                        </Col>
                        <Col span={8}>
                            <MiniStatistics2
                                icon={<DropIcon />}
                                title="Şərti yanacağın xusüsi sərfi"
                                color="green"
                                value={isRandom ? randomValue(200, 300, 1) : "247.6"}
                                unit="qr/kVts"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(-10, 0, 0)}%` : "-5%"}
                            />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={6}>
                            <MiniStatistics2
                                icon={<CloudIcon />}
                                title="Texnoloji itkilərin şindən buraxılan enerjiyə nisbəti"
                                color="green"
                                value={isRandom ? `${randomValue(0.1, 2, 1)}%` : "0.6%"}
                                statusText="Çox pis"
                                percent={isRandom ? `${randomValue(50, 200, 0)}%` : "147%"}
                            />
                        </Col>
                        <Col span={6}>
                            <MiniStatistics2
                                icon={<GasStationIcon />}
                                title="Stansiyaların faydalı buraxlışı"
                                color="red"
                                value={isRandom ? randomValue(4000, 7000, 1) : "5.780,1"}
                                unit="MVt"
                                statusText="Çox pis"
                                percent={isRandom ? `${randomValue(-20, 0, 0)}%` : "-13%"}
                            />
                        </Col>
                        <Col span={6}>
                            <MiniStatistics2
                                icon={<ElectricIcon />}
                                title="Şinən buraxılan elektrik enerjisi"
                                color="red"
                                value={isRandom ? randomValue(4000, 7000, 1) : "5.817,5"}
                                unit="min MVt/s"
                                statusText="Çox pis"
                                percent={isRandom ? `${randomValue(-20, 0, 0)}%` : "-12%"}
                            />
                        </Col>
                        <Col span={6}>
                            <MiniStatistics2
                                icon={<UsersIcon />}
                                title="SƏTƏM göstəricilərinin qiymətləndirilməsi"
                                color="yellow"
                                value={isRandom ? randomValue(0, 5, 1) : "0.0"}
                                unit="ədəd"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(0, 10, 0)}%` : "0%"}
                            />
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={6}>
                            <SparkStatistics
                                title="Açılmaların sayı"
                                value={isRandom ? Number(randomValue(100, 1000, 0)) : 659}
                                unit="ədəd"
                                percent={isRandom ? `${randomValue(-10, 10, 0)}%` : "5%"}
                                statusText="Pis"
                                color="red"
                                data={chartData}
                            />
                        </Col>
                        <Col span={6}>
                            <BarStatistics
                                title="İmtinaların sayı"
                                value={isRandom ? Number(randomValue(10, 100, 0)) : 41}
                                unit="ədəd"
                                percent={isRandom ? `${randomValue(-80, 10, 0)}%` : "-60%"}
                                statusText="Əla"
                                color="green"
                                data={barData}
                            />
                        </Col>
                        <Col span={6}>
                            <CrashStatistics
                                title="Qəzaların sayı"
                                value={isRandom ? Number(randomValue(0, 10, 0)) : 4}
                                unit="ədəd"
                                percent={isRandom ? Number(randomValue(-70, 10, 0)) : -43}
                                statusText="Əla"
                                color="#E64542"
                            />
                        </Col>
                        <Col span={6}>
                            <ProgressStatistics
                                title="Əmək haqqı fondu"
                                value={isRandom ? randomValue(5000, 10000, 1) : "7.189,5"}
                                unit="min manat"
                                statusText="Çox pis"
                                percent={isRandom ? Number(randomValue(0, 50, 0)) : 27}
                                color="#E64542"
                            />
                        </Col>
                    </Row>

                    <div className={styles.chart_list_main}>
                        <div className={styles.chart_item}>
                            <MiniStatistics
                                icon={<StatisticDown />}
                                title="Ştat sayının optimallaşdırılması və səmərəliliyin artırılması"
                                color="green"
                                value={isRandom ? randomValue(500, 1000, 0) : "672"}
                                unit="nəfər"
                                statusText="Yaxşı"
                                percent={isRandom ? `${randomValue(-10, 0, 0)}%` : "-4%"}
                            />
                        </div>

                        <div className={styles.chart_item}>
                            <MiniStatistics
                                icon={<StatisticNormal />}
                                title="Boşdayanma saatlarının sayı (Qəzaya görə)"
                                color="yellow"
                                value={isRandom ? randomValue(0, 5, 0) : "0"}
                                unit="saat"
                                statusText="Əla"
                                percent={isRandom ? `${randomValue(0, 5, 0)}%` : "0%"}
                            />
                        </div>

                        <div className={styles.chart_item}>
                            <MiniStatistics
                                icon={<StatisticDown />}
                                title="İş buraxma faizi (iş buraxma saatlarının ümumi saatlara nisbəti)"
                                color="red"
                                value={isRandom ? randomValue(0, 5, 1) : "1.3"}
                                unit="%"
                                statusText="Əla"
                                percent={isRandom ? `${randomValue(-40, -10, 0)}%` : "-25%"}
                            />
                        </div>

                        <div className={styles.chart_item}>
                            <MiniStatistics
                                icon={<StatisticUp />}
                                title="Kadr hazırlığınına göndərilən işçilərin ümumi işçilərin sayına nisbəti"
                                color="green"
                                value={isRandom ? randomValue(1, 10, 1) : "3,5"}
                                unit="%"
                                statusText="Əla"
                                percent={isRandom ? `${randomValue(10, 80, 0)}` : "54"}
                            />
                        </div>

                        <div className={styles.chart_item}>
                            <MiniStatistics
                                icon={<StatisticUp />}
                                title="Kadr hazırlığınına göndərilən işçilərin ümumi işçilərin sayına nisbəti"
                                color="green"
                                value={isRandom ? randomValue(1, 10, 1) : "3,5"}
                                unit="%"
                                statusText="Əla"
                                percent={isRandom ? `${randomValue(10, 80, 0)}` : "54"}
                            />
                        </div>

                    </div>

                </Flex>
            </div>
        </>
    )
}