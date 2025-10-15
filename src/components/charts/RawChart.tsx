import ChartIcon from '@/assets/icon/ChartIcon';
import DownLineIcon from '@/assets/icon/DownLineIcon';
import UpLineIcon from '@/assets/icon/UpLineIcon';
import UpperIcon from '@/assets/icon/UpperIcon';
import styles from '@/styles/common.module.css';
import { Typography } from '../Typography';

export default function RawChart() {
    return (
        <>
            <div className={`${styles.statistic_card} ${styles.xlarge_height}`}>
                <div className={styles.statistic_item}>
                    <Typography as='h4' variant='body1' color='primary' weight='medium'>
                        1
                        <span> kvts </span>
                        elektrik enerjisinin istehsalının maya dəyəri, o cümlədən
                    </Typography>
                </div>
                <div className={styles.chart_top_box}>
                    <div className={styles.top_left}>
                        <div className={styles.top_left_icon}>
                            <h4>4,5</h4>
                            <span>qəpik/kVts</span>
                            <UpperIcon fill='#FF4D49' />
                            <p>2%</p>
                        </div>
                        <h5>Natamam</h5>
                    </div>
                    <ChartIcon />
                </div>
                <ul className={styles.chart_list}>
                    <li>
                        <div className={styles.list_item_left_box}>
                            <Typography variant='body1' color='primary' weight='regular'>
                                Yanacaq xərci
                            </Typography>
                            <Typography variant='body2' color='secondary' weight='regular'>
                                3,1 qəpik/kVts
                            </Typography>
                        </div>
                        <div className={styles.list_item_right}>
                            <p>
                                <DownLineIcon /><span className={styles.green}>-3,1%</span>
                            </p>
                             <Typography variant='overline' color='secondary' weight='regular'>Yaxşı</Typography>
                        </div>
                    </li>
                    <li>
                        <div className={styles.list_item_left_box}>
                            <Typography variant='body1' color='primary' weight='regular'>
                                Amortizasiya
                            </Typography>
                            <Typography variant='body2' color='secondary' weight='regular'>
                                1.0 qəpik/kVts
                            </Typography>
                        </div>
                        <div className={styles.list_item_right}>
                            <p>
                                <UpLineIcon /><span className={styles.red}>22%</span>
                            </p>
                             <Typography variant='overline' color='secondary' weight='regular'>Çox pis</Typography>
                        </div>
                    </li>
                    <li>
                        <div className={styles.list_item_left_box}>
                            <Typography variant='body1' color='primary' weight='regular'>
                                Təmir xərci
                            </Typography>
                            <Typography variant='body2' color='secondary' weight='regular'>
                                0.1 qəpik/kVts
                            </Typography>
                        </div>
                        <div className={styles.list_item_right}>
                            <p>
                                 <UpLineIcon /><span className={styles.red}>52%</span>
                            </p>
                             <Typography variant='overline' color='secondary' weight='regular'>Çox pis</Typography>
                        </div>
                    </li>
                    <li>
                        <div className={styles.list_item_left_box}>
                            <Typography variant='body1' color='primary' weight='regular'>
                                Əmək haqqı və DSMF
                            </Typography>
                            <Typography variant='body2' color='secondary' weight='regular'>
                                0,1 qəpik/kVts
                            </Typography>
                        </div>
                        <div className={styles.list_item_right}>
                            <p>
                                <UpLineIcon /><span className={styles.red}>44%</span>
                            </p>
                             <Typography variant='overline' color='secondary' weight='regular'>Çox pis</Typography>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </>
    )
}
