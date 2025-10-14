import { Table as TableComponent } from "antd";

import CustomPagination from "@/components/Table/components/CustomPagination";

import React from "react";
import { Loading } from "../Loading";
import styles from "./table.module.css";

interface TablePropsWithActions<T> {
  data: T[];
  totalCount: number | null;
  columns?: any[];
  loading: boolean;
  currentPage: number;
}

function Table<T extends object>({
  data,
  totalCount,
  loading,
  currentPage,
  columns: customColumns,
}: TablePropsWithActions<T>) {

  return (
    <>
      <div className={styles.custom_table}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.table_box}>
              <TableComponent
                columns={customColumns}
                dataSource={data?.map((record, index) => ({
                  ...record,
                  key: (record as any)?.id || index,
                }))}
                pagination={false}
                // components={components}
              />
            </div>
            {!!totalCount && (
              <CustomPagination
                totalCount={totalCount}
                currentPage={currentPage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
export default React.memo(Table)