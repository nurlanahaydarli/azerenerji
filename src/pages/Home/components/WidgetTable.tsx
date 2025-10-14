import Table from "@/components/Table";
import type { ITableRow } from "@/types/common.types";
import { ArrowDownOutlined, ArrowUpOutlined, PhoneOutlined } from "@ant-design/icons";

const fmt = (v: number | string) =>
  typeof v === "number"
    ? new Intl.NumberFormat("az-AZ", { maximumFractionDigits: 1 }).format(v)
    : v;
const data: ITableRow[] = [
  {
    id: "1",
    station_name: "Azərbaycan İES",
    energy_production: 6780.5,
    kpi_rub_I: 85,
    kpi_rub_II: 92,
    kpi_rub_III: 88,
    kpi_rub_IV: 90,
    responsible_person: "Elvin Quliyev",
    phone: "+994507001122",
  },
  {
    id: "2",
    station_name: "Sumqayıt İES",
    energy_production: 7320.8,
    kpi_rub_I: 40,
    kpi_rub_II: 58,
    kpi_rub_III: 61,
    kpi_rub_IV: 67,
    responsible_person: "Nurlan Rəhimov",
    phone: "+994554441122",
  },
  {
    id: "3",
    station_name: "Bakı İES",
    energy_production: 5025.2,
    kpi_rub_I: 75,
    kpi_rub_II: 73,
    kpi_rub_III: 70,
    kpi_rub_IV: 77,
    responsible_person: "Aysel Məmmədova",
    phone: "+994557775522",
  },
];


export default function WidgetTable() {
    const kpiRender = (val: number) => (
    <span
      style={{
        color: val >= 60 ? "rgba(44, 184, 152, 1)" : "rgba(255, 77, 73, 1)",
        fontWeight: 500,
      }}
    >
      {val}% {val >= 70 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
    </span>
  );
    const columns  = [
  {
    title: "Elektrostansiyanın adı",
    dataIndex: "station_name",
    render: (val: string) => <span style={{ fontWeight: 500 }}>{val}</span>,
  },
  {
    title: "Enerji istehsalı (mVt)",
    dataIndex: "energy_production",
    render: (val: number) => fmt(val),
  },
  {
      title: "Rüb I KPI",
      dataIndex: "kpi_rub_I",
      render: kpiRender,
    },
    {
      title: "Rüb II KPI",
      dataIndex: "kpi_rub_II",
      render: kpiRender,
    },
    {
      title: "Rüb III KPI",
      dataIndex: "kpi_rub_III",
      render: kpiRender,
    },
    {
      title: "Rüb IV KPI",
      dataIndex: "kpi_rub_IV",
      render: kpiRender,
    },
  {
    title: "Cavabdeh şəxs",
    dataIndex: "responsible_person",
  },
  {
    title: "Əlaqə",
    dataIndex: "phone",
    render: (phone: string) => (
      <a href={`tel:${phone}`}>
        <PhoneOutlined style={{ color: "#1890ff", fontSize: 16 }} />
      </a>
    ),
  },
];

    return (
        <Table
            data={data}
            totalCount={null}
            columns={columns}
            loading={false}
            currentPage={1}
        />
    );
}
