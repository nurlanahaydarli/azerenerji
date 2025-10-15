import DownIcon from '@/assets/icon/DownIcon';
import UpperIcon from '@/assets/icon/UpperIcon';
import styles from '@/styles/common.module.css';
import { Col, Row } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Typography } from '../Typography';


const data = [
    { name: "Yan", value: -5 },
    { name: "Fev", value: -7 },
    { name: "Mar", value: -3 },
    { name: "Apr", value: -8 },
    { name: "May", value: 10 },
    { name: "İyun", value: 15 },
    { name: "İyul", value: -2 },
    { name: "Avq", value: 8 },
    { name: "Sen", value: 5 },
    { name: "Okt", value: 12 },
    { name: "Noy", value: 7 },
    { name: "Dek", value: 3 },
];
export default function StatisticsChart() {
    const [searchParams] = useSearchParams();
    const startDate = searchParams.get("startDate");
    const isRandom = Boolean(startDate);
    const randomValue = (min: number, max: number, fixed = 1) =>
        (Math.random() * (max - min) + min).toFixed(fixed);

    return (
        <>
            <div className={`${styles.statistic_card} ${styles.medium_height}`}>
                <Row gutter={10}>
                    <Col xl={12} md={24} xs={24}>
                        <div className={styles.statistic_item}>
                            <Typography as='h4' variant='h5' color='primary' weight='medium'>
                                Statistika
                            </Typography>
                            <div className={styles.scroll_box}>
                                <ul>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Azərbaycan İES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                                {isRandom ? randomValue(0, 20, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Çox pis
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Bakı ES
                                            </Typography>
                                            <UpperIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(44, 184, 152, 1)' weight='regular'>

                                                {isRandom ? randomValue(60, 80, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Yaxşı
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Sumqayıt ES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                                {isRandom ? randomValue(20, 30, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Natamam
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Cənub ES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                                {isRandom ? randomValue(20, 40, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Natamam
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Azərbaycan İES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                                {isRandom ? randomValue(0, 20, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Çox pis
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Bakı ES
                                            </Typography>
                                            <UpperIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(44, 184, 152, 1)' weight='regular'>

                                                {isRandom ? randomValue(60, 80, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Yaxşı
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Sumqayıt ES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                               {isRandom ? randomValue(30, 50, 2) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Natamam
                                        </Typography>
                                    </li>
                                    <li>
                                        <div className={styles.list_item_left}>
                                            <Typography variant='body1' color='primary' weight='regular'>
                                                Cənub ES
                                            </Typography>
                                            <DownIcon />
                                            <Typography as='span' variant='body2' custom_color='rgba(255, 62, 29, 1)' weight='regular'>

                                                {isRandom ? randomValue(12, 20, 1) : "23.4"}%
                                            </Typography>
                                        </div>
                                        <Typography as='span' variant='body2' color='primary' weight='medium'>
                                            Natamam
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12} md={24} xs={24}>
                        <div className={styles.right_chart_box}>
                            <Typography as='h4' variant='h5' color='primary' weight='medium'>
                                Cəmi İES
                            </Typography>
                            <div className={styles.chart_content}>
                                <div className={styles.bottom_box}>
                                    <Typography as='h4' variant='h4' custom_color='rgba(217, 75, 72, 1)' weight='medium'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.3837 15.8837L21.6162 14.1163L16.25 19.4825V7.5H13.75V19.4825L8.38371 14.1163L6.61621 15.8837L15 24.2675L23.3837 15.8837Z" fill="#FF4D49" />
                                            <path d="M23.3837 15.8837L21.6162 14.1163L16.25 19.4825V7.5H13.75V19.4825L8.38371 14.1163L6.61621 15.8837L15 24.2675L23.3837 15.8837Z" fill="black" fill-opacity="0.1" />
                                        </svg>

                                        {isRandom ? randomValue(12, 20, 2) : "-23.4"}%
                                    </Typography>
                                    <Typography variant='body1' color='primary' weight='regular'>
                                        Çox pis
                                    </Typography>
                                </div>
                                <div className={styles.chart_box}>
                                    <ResponsiveContainer>
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(230, 69, 66, 0.3)" stopOpacity={1} />
                                                    <stop offset="100%" stopColor="rgba(230, 69, 66, 0)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>

                                            <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />

                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: "rgba(46, 64, 81, 0.38)", fontSize: 11, fontWeight: 400 }}
                                            />
                                            <YAxis axisLine={false} tickLine={false} />
                                            <Tooltip />

                                            <Area
                                                type="linear"
                                                dataKey="value"
                                                stroke="#FF3E1D"
                                                strokeWidth={2}
                                                fill="url(#colorValue)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
