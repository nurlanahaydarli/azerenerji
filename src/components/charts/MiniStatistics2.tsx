import styles from '@/styles/common.module.css';
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
export default function MiniStatistics2({
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
            <div className={`${styles.statistic_card}`}>
                <div className={`${styles.statistic_item} ${styles.statistic_item_grid}`}>
                    <Typography as='h4' variant='body1' color='primary' weight='medium'>
                        {title}
                    </Typography>
                    <div className={styles.main_icon}>
                        {icon}
                    </div>
                </div>
                <div>
                    <div className={styles.main_text}>
                        <Typography variant='h6' as='h6' color='primary' weight='medium'>
                            {value}
                        </Typography>
                        <small>
                            {unit}
                        </small>
                        <Typography as='span' variant='body2' weight='regular' className={styles[color]}>({percent})</Typography>
                       
                    </div>

                    <Typography variant='body1' weight='medium' color='secondary'>{statusText}</Typography>
                </div>
            </div>
        </>
    )
}
