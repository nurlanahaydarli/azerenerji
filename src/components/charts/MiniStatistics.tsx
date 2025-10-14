import DownIcon from '@/assets/icon/DownIcon';
import RightIcon from '@/assets/icon/RightIcon';
import UpperIcon from '@/assets/icon/UpperIcon';
import styles from '@/styles/common.module.css';
import { Flex } from 'antd';
import type { ReactNode } from 'react';
import { Typography } from '../Typography';


type MiniStatisticsProps = {
    icon: ReactNode;
    title: string;
    color?: "red" | "green" | "yellow" | "primary";
    value?: string | number;
    unit?: string;
    statusText?: string;
    percent?: string | number;
};
export default function MiniStatistics({
    icon,
    title,
    color = "primary",
    value,
    unit,
    statusText,
    percent,
}: MiniStatisticsProps) {
    return (
        <>
            <div className={`${styles.statistic_card} ${styles.small}`}>
                <div className={styles.statistic_item}>
                    <Typography as='h4' variant='body1' color='primary' weight='medium'>
                        {title}
                    </Typography>
                </div>
                <div className={styles.content_box_chart}>

                   <div className={styles.main_icon}>
                     {icon}
                   </div>
                    <h4>
                        {value} <small>{unit}</small>
                    </h4>
                    <p>{statusText}</p>
                    <Flex justify='center' align='center' gap={5} className={`${styles[color]}`}>
                        {percent}%
                        {color === "red" && < DownIcon />  }
                        {color === "green"    &&      <UpperIcon /> }
                        {color === "yellow"    &&      <RightIcon /> }
                    </Flex></div>
            </div>
        </>
    )
}
