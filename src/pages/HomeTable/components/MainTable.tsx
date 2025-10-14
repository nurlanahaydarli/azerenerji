import Table from "@/components/Table";
import type { EvalType, IIndicatorRow } from "@/types/common.types";
import { Checkbox } from "antd";
import styles from '../../../styles/common.module.css';

type TableType = {
    currentPage: number;
    loading: boolean;
    data: IIndicatorRow[]
};

const evaluationColor: Record<EvalType, string> = {
    "Çox pis": "red-bg",
    "Pis": "volcan-bg",
    "Natamam": "gold-bg",
    "Yaxşı": "green-bg",
    "Əla": "blue-bg",
};
const fmt = (v: number | string) =>
    typeof v === "number"
        ? new Intl.NumberFormat("az-AZ", { maximumFractionDigits: 1 }).format(v)
        : v;
export default function MainTable({
    currentPage,
    loading,
    data,
}: TableType) {
    const columns = [
        {
            title: (
                <Checkbox />
            ),
            dataIndex: "checkbox",
            render: (_: any) => (
                <Checkbox />
            ),
        },
        {
            title: "Göstəricilər",
            dataIndex: "indicator",
            render: (val: string) => (
                <a href="#" style={{ color: "rgba(63, 150, 210, 1)" }}>
                    {val}
                </a>
            ),
        },
        {
            title: "Ölçü vahidi",
            dataIndex: "unit",
        },
        {
            title: "2023-cü ilin I rübü",
            dataIndex: "q1_2023",
            align: "right" as const,
            render: (val: number | string) => fmt(val),
        },
        {
            title: "2024-cü ilin I rübü",
            dataIndex: "q1_2024",
            align: "right" as const,
            render: (val: number | string) => fmt(val),
        },
        {
            title: "Fərq (+/-)",
            dataIndex: "diff",
            align: "right" as const,
            render: (val: number) => (val > 0 ? `+${fmt(val)}` : fmt(val)),
        },
        {
            title: "%",
            dataIndex: "percent",
            align: "right" as const,
        },
        {
            title: "Yekun qiymətləndirmə",
            dataIndex: "evaluation",
            render: (val: EvalType) => <span className={`${styles.status} ${styles[evaluationColor[val]]}`}>
                {val}
            </span>,
        },
        {
            title: "Xüsusi çəki faizi",
            dataIndex: "weight",
            align: "right" as const,
            render: (v: number | string) =>
                typeof v === "number" ? `${fmt(v)}%` : v,
        },
    ];

    return (
        <Table
            data={data}
            totalCount={data?.length}
            columns={columns}
            loading={loading}
            currentPage={currentPage}
        />
    );
}
