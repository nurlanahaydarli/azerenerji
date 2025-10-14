import { Flex, Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";

import LeftIcon from "@/assets/icon/LeftIcon";
import RightIcons from "@/assets/icon/RightIcons";
import { Typography } from "@/components/Typography";
import styles from "./pagination.module.css";

interface CustomPaginationProps {
  totalCount: number;
  currentPage: number;
  pagination?: null;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalCount,
  currentPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const handleChange = (page: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set("page", page.toString());
      return params;
    });
  };

  const start = Math.min((currentPage - 1) * limit + 1, totalCount);
  const itemRender = (
    _current: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return (
        <button className={styles.action_btn}>
          <LeftIcon />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className={styles.action_btn}>
          <RightIcons />
        </button>
      );
    }
    return originalElement;
  };
  const handlePageSizeChange = (newLimit: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("limit", newLimit.toString());
      params.set("page", "1");
      return params;
    });
  };
  return (
    <div className={styles.paginationContainer}>
      <Typography variant="body2" weight="regular" color="primary">
        Page: {page}
      </Typography>
      <Flex align="center" gap={8}>
        <Typography variant="body2" weight="regular" color="secondary">
          Rows per page: 
        </Typography>
        <Select
          value={limit}
          onChange={handlePageSizeChange}
          options={[10, 25, 50].map((size) => ({ value: size, label: size }))}
          className={`pagination_select`}
        />
      </Flex>
      <Typography variant="body2" weight="regular" color="primary">
        Page {start}  of  {totalCount}
      </Typography>
      <Pagination
        current={currentPage}
        pageSize={limit}
        total={totalCount}
        onChange={handleChange}
        itemRender={itemRender}
        showSizeChanger={false}
      />
    </div>
  );
};

export default CustomPagination;
