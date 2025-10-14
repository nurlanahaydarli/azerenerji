
import styles from "@/styles/common.module.css";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { Typography } from "../Typography";

type SparkStatisticsProps = {
  title: string;
  value: number | string;
  unit?: string;
  percent?: string;
  statusText?: string;
  color?: string; // məsələn: "#FF3E1D"
  data: { value: number }[];
};

export default function SparkStatistics({
  title,
  value,
  unit,
  percent,
  statusText,
  color = "#FF3E1D",
  data,
}: SparkStatisticsProps) {
  return (
    <div className={`${styles.statistic_card}`}>
      <div className={`${styles.statistic_item} ${styles.statistic_item_grid}`}>
        <Typography as='h4' variant='body1' color='primary' weight='medium'>
          {title}
        </Typography>
      </div>
      <div>
        <div className={styles.main_text}>
          <Typography variant='h6' as='h6' color='primary' weight='medium'>
            {value}
          </Typography>
          <small>
            {unit}
          </small>
          <Typography as='span' variant='body2' weight='regular' className={styles[color]}>({percent})</Typography>
        </div>
        <Typography variant='body1' weight='medium' color='secondary'>{statusText}</Typography>
      </div>
      <div style={{ height: "90px" }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="sparkColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>

            <Tooltip cursor={false} contentStyle={{ display: "none" }} />

            <Area
              type="linear"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill="url(#sparkColor)"
              dot={{ r: 4, fill: "#fff", stroke: color, strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
