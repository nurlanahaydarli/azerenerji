import styles from "@/styles/common.module.css";
import { Typography } from "../Typography";

type ProgressStatisticsProps = {
    title: string;
    value: number | string;
    unit?: string;
    statusText?: string;
    percent: number;
    color?: string;
};

export default function ProgressStatistics({
    title,
    value,
    unit,
    statusText,
    percent,
    color = "#E64542",
}: ProgressStatisticsProps) {
    return (
        <div className={styles.statistic_card}>
            <div className={styles.statistic_item}>
                <Typography as="h4" variant="body1" color="primary" weight="medium">
                    {title}
                </Typography>
            </div>

            <div className={styles.main_text}>
                <Typography variant="h6" as="h6" color="primary" weight="medium">
                    {value}
                </Typography>
                {unit && <small>{unit}</small>}
            </div>

            {statusText && (
                <Typography variant="body1" weight="medium" color="secondary">
                    {statusText}
                </Typography>
            )}

            {/* Progress bar */}
            <div style={{ marginTop: "40px" }}>
                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: "rgba(230, 69, 66, 0.2)",
                        borderRadius: "6px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: `${percent}%`,
                            height: "100%",
                            backgroundColor: color,
                            borderRadius: "6px",
                            transition: "width 0.3s ease",
                        }}
                    ></div>
                    <span
                        style={{
                            position: "absolute",
                            right: 0,
                            top: "-22px",
                            fontSize: "13px",
                            fontWeight: 500,
                            color,
                        }}
                    >
                        {percent}%
                    </span>
                </div>
            </div>
        </div>
    );
}
