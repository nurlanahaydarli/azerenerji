import styles from "@/styles/common.module.css";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Typography } from "../Typography";

type GaugeStatisticsProps = {
    title: string;
    value: number | string;
    unit?: string;
    percent: number; 
    statusText?: string;
    color?: string;
};

export default function CrashStatistics({
    title,
    value,
    unit,
    percent,
    statusText,
    color = "#FF3E1D",
}: GaugeStatisticsProps) {
    // Gauge üçün data
    const data = [
        { name: "current", value: Math.abs(percent) },
        { name: "rest", value: 100 - Math.abs(percent) },
    ];

    return (
        <div className={`${styles.statistic_card}`}>
            <div className={`${styles.statistic_item} ${styles.statistic_item_grid}`}>
                <Typography as="h4" variant="body1" color="primary" weight="medium">
                    {title}
                </Typography>
            </div>
            <div>
                <div className={styles.main_text}>
                    <Typography variant="h6" as="h6" color="primary" weight="medium">
                        {value}
                    </Typography>
                    <small>{unit}</small>
                    <Typography
                        as="span"
                        variant="body2"
                        weight="regular"
                        className={styles[color]}
                    >
                    </Typography>
                </div>
                <Typography variant="body1" weight="medium" color="secondary">
                    {statusText}
                </Typography>
            </div>

            <div style={{ height: "90px" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={50}
                            outerRadius={60}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}   
                            
                        >
                            <Cell key="current" fill={color} />
                            <Cell key="rest" fill="#E5E7EB" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div
                    style={{
                        position: "relative",
                        top: "-65px",
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#2E4051",
                    }}
                >
                    {percent > 0 ? `+${percent}%` : `${percent}%`}
                </div>
            </div>
        </div>
    );
}
