'use client';

import styles from './dashboard.module.css'
import React from 'react';
import Blade from './blade'

export default function Dashboard() {
    const [selectedBlade, setSelectedBlade] = React.useState(1);
    const bladeProps = { selectedBlade, setSelectedBlade };

    return (
        <div className={styles.dashboard}>
            <Blade {...bladeProps} index={0} title='Marketplace'></Blade>
            <Blade {...bladeProps} index={1} title='Xbox Live'></Blade>
            <Blade {...bladeProps} index={2} title='Games'></Blade>
            <Blade {...bladeProps} index={3} title='Media'></Blade>
            <Blade {...bladeProps} index={4} title='System'></Blade>
        </div>
    )
}
