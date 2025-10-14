import styles from "./nodata.module.css";

import NoDataIcon from "@/assets/icon/NoDataIcon";
import { Typography } from "@/components/Typography";
import { ROUTER } from "@/constants/routes";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NoData() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.no_data_box}>
        <NoDataIcon />
        <div>
          <Typography
            variant="h6"
            align="center"
            weight="bold"
            color="secondary"
          >
            Not found 
          </Typography>
          <Typography
            variant="body1"
            align="center"
            weight="bold"
            color="secondary"
          >
            Go to main page
          </Typography>
        </div>
        <Button onClick={()=>navigate(ROUTER.HOME)}>
                Go home
        </Button>
      </div>
    </>
  );
}
