import { Dayjs } from "dayjs";

export type TableType<T> = {
  onDetail?: (record: T) => void;
  onDelete?: (record: T) => void;
  onEdit?: (record: T) => void;
  // selectedRowKeys?: T;
  // handleCheckboxChange?: (record)=> void;
  data?: T[];
};
export interface ITableRow {
  id: string;
  station_name: string;           
  energy_production: number;     
  kpi_rub_I: number;           
  kpi_rub_II: number;  
  kpi_rub_III: number; 
  kpi_rub_IV: number;
  responsible_person: string;
  phone: string;    
}

export interface IRTKInitialState<T> {
  data: IResponse<T>;
  singleData?: T | null;

  loading_GET?: boolean;
  error_GET?: string | null;

  loading_ADD?: boolean;
  error_ADD?: string | null | any;

  loading_REMOVE?: boolean;
  error_REMOVE?: string | null | any;

  loading_UPDATE?: boolean;
  error_UPDATE?: string | null | any;

  loading_EXPORT?: boolean;
  error_EXPORT?: string | null | any;

  loading_CHECK_UNIQUE?: boolean;
  error_CHECK_UNIQUE?: string | null;
}
export interface IResponse<T> {
  data: T[];
  totalCount: number;
  limit: number;
  currentPage: number;
  totalPages: number;
}

export type GenericTableProps<T> = Omit<TableType<T>, "data"> & {
  data: IResponse<T>;
  selectedRowKeys: React.Key[]; 
  handleCheckboxChange: (checked: boolean, record: T) => void;
  loading: boolean;
  currentPage: number;
  onDelete?: (record: T) => void;
  onEdit?: (record: T) => void;
  onDetail?: (record: T) => void;
};

export interface IExport {
  _id: number;
  field: string;
  name: string;
  disabled: boolean;
}

export interface SimpleModalType<T> {
  open: boolean;
  _id?: string | null;
  onClose: () => void;
  setSelectedRecord: (value: T | null) => void;
  selectedRecord?: T | null;
  depth?:number
}

export interface IHeader {
  name: string;
  field: string;
}

export interface IRTKInitialStateTableSetting<T> {
  data: {
    data: T[];
  };
  singleData?: T | null;

  loading_GET: boolean;
  error_GET: string | null;

  loading_ADD: boolean;
  error_ADD: string | null;

  loading_REMOVE?: boolean;
  error_REMOVE?: string | null;

  loading_UPDATE?: boolean;
  error_UPDATE?: string | null;
}


export interface IQuery {
  field:string;
  operator:string,
  value:string | string[]
}


export interface IPopulate {
  collection:string;
  path:string;
  fields:string[]
}


export interface IError {
  additional:Record<string,any>;
  error:string;
  message:string;
  path:string
  status:string
  timestamp:string
}
export type EvalType = "Çox pis" | "Pis" | "Natamam" | "Yaxşı" | "Əla";
export interface IIndicatorRow {
  _id: string;                
  indicator: string;         
  unit: string;               
  q1_2023: number | string;  
  q1_2024: number | string;  
  diff: number;               
  percent: string;           
  evaluation: "Çox pis" | "Pis" | "Natamam" | "Yaxşı" | "Əla"; 
  weight: number | string;   
}

export type DateType= Date | Dayjs | null | undefined;