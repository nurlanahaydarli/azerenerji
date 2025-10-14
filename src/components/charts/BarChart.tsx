import styles from "@/styles/common.module.css";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Typography } from "../Typography";

type BarStatisticsProps = {
  title: string;
  value: number | string;
  unit?: string;
  percent?: string;
  statusText?: string;
  color?: string; // aktiv sütun rəngi
  data: { day: string; value: number; active?: boolean }[];
};

export default function BarStatistics({
  title,
  value,
  unit,
  percent,
  statusText,
  color = "#2CA58D", // əsas rəng
  data,
}: BarStatisticsProps) {
  return (
    <div className={`${styles.statistic_card} ${styles.pb_5}`}>
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
          <Typography as="span" variant="body2" weight="regular" className={styles[color]}>
            ({percent})
          </Typography>
        </div>
        <Typography variant="body1" weight="medium" color="secondary">
          {statusText}
        </Typography>
      </div>

      <div style={{ height: "90px" }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(46, 64, 81, 0.38)", fontSize: 11 }}
            />
            <Tooltip cursor={false} contentStyle={{ display: "none" }} />

            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.active ? 'rgba(44, 184, 152, 1)' : "rgba(44,165,141,0.2)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
