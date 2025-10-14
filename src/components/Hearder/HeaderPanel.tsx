import LogoutIcon from "@/assets/icon/LogoutIcon";
import NotificationIcon from "@/assets/icon/NotificationIcon";
import PlusIcon from "@/assets/icon/PlusIcon";
import styles from '../../styles/common.module.css';

import {
  UserOutlined
} from "@ant-design/icons";
import { Button, DatePicker, Select, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "react-router-dom";

const { RangePicker } = DatePicker;

export default function HeaderPanel() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDateChange = (
  dates: [Dayjs | null, Dayjs | null] | null,
   _dateStrings: [string, string]
) => {
  if (!dates || !dates[0] || !dates[1]) return;
  const [start] = dates;
  searchParams.set("startDate", start.format("YYYY-MM-DD"));
  setSearchParams(searchParams);
};
  return (
    <div
      className={styles.header_box_bttom}
    >
      {/* Left side */}
      <Space>
        <RangePicker
          defaultValue={[
            dayjs("2023-05-01", "YYYY-MM-DD"),
            dayjs("2023-05-31", "YYYY-MM-DD"),
          ]}
          onChange={handleDateChange}
        />
        <Select
          defaultValue="Cəmi İES"
          style={{ width: 150 }}
          options={[{ value: "cem", label: "Cəmi İES" }]}
          suffixIcon={<UserOutlined />}
        />
      </Space>

      {/* Right side */}
      <div className={styles.header_btns}>
        <Button type="primary" icon={<PlusIcon />} style={{ background: "rgba(44, 184, 152, 1)" }}>
          Yeni
        </Button>
        {/* <Button icon={<Bigger />} />
        <Button icon={<MenusIcon />} />
        <Button icon={<TasksIcon />} /> */}
        <Button icon={<NotificationIcon />} />
        <Button icon={<LogoutIcon />} />
      </div>
    </div>
  );
}
