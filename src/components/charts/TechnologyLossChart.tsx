import DownIcon from "@/assets/icon/DownIcon";
import styles from "@/styles/common.module.css";
import { useSearchParams } from "react-router-dom";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Typography } from "../Typography";

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
      }}
    >
      {payload.map((entry: any, index: number) => (
        <div
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: entry.color,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "rgba(46, 64, 81, 0.6)",
              fontWeight: 500,
            }}
          >
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function TechnologyLossChart() {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const isRandom = Boolean(startDate);
  const randomValue = (min: number, max: number, fixed = 1) =>
    (Math.random() * (max - min) + min).toFixed(fixed);
  const data = [
    {
      name: "Transformator itkisi",
      value: 65,
    },
    {
      name: "Faktiki qeyri balans",
      value: 35,
    },
  ];

  const total = isRandom ? randomValue(-4, 4, 2) : "4";
  const percent = isRandom ? randomValue(2, 2, 1) : "2%";
  const status = "Çox pis";

  return (
    <div className={`${styles.statistic_card} ${styles.xlarge_height}`}>
      <div className={styles.statistic_item}>
        <Typography as="h4" variant="body1" color="primary" weight="medium">
          Texnoloji itkilər, o cümlədən
        </Typography>
      </div>

      <div className={styles.text_items}>
        <div className={styles.text_box}>
          <p>{total}</p> <span>min MVt/s</span>
        </div>
        <div className={styles.text_box}>
          <DownIcon fill="rgba(217, 75, 72, 1)" /> <h5>{percent}</h5>{" "}
          <h6>       {status}</h6>
        </div>
      </div>

      {/* ✅ Pie Chart hissəsi */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={70} // donut effekti üçün
              paddingAngle={3}
              dataKey="value"
            >
              <Cell fill="rgba(63, 150, 210, 1)" />
              <Cell fill="rgba(3, 195, 236, 0.9)" />
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
