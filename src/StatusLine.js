import React from 'react';
import PropTypes from 'prop-types';
import styles from './statusLine.module.less';

const StatusLine = ({ status, nameList = [], title, }) => {
    const childRender = data => data.map((item, index) => {
        let draw = status >= item.status ? 'complete' : 'unComplete';
        if (item.children) {
            const lg = (status * 10) % 10 === 0 ? status : (status * 10) % 10;
            const length = item.children.length - lg;
            return (
                <div className={styles.contain} key={item.id}>
                    <div className={styles.line} >
                        <div className={styles[draw]}>
                            <div className={styles.minLine} />
                            <div className={styles.circle}>{item.status + 1}</div>
                            <div className={styles.minLine} style={{ height: 40 * lg }} />
                            <div className={styles.minLine} style={{ height: 40 * length, backgroundColor: '#eaeaeb' }} />
                        </div>
                    </div>
                    <div className={styles.name}>
                        <div className={styles[draw]} style={{ marginTop: 30 }}>
                            <div className={styles.tagName}>{item.name}</div>
                            <div className={styles.triangle} />
                        </div>
                        {item.children.map(item => {
                            let situation = status >= item.status ? 'complete' : 'unComplete';
                            return (<div className={styles[situation]} style={{ marginTop: 10 }} key={item.id}>
                                <div className={styles.children}>{item.name}</div>
                                <div className={styles.triangle} />
                            </div>)
                        })}
                    </div>
                </div>
            )
        };
        return (
            <div className={styles.contain} key={item.id}>
                <div className={styles.line} >
                    <div className={styles[draw]}>
                        {index === 0 ? <div style={{ height: 30 }} /> : <div className={styles.minLine}></div>}
                        <div className={styles.circle}>{item.status + 1}</div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className={styles[draw]} style={{ marginTop: 30 }}>
                        <div className={styles.tagName}>{item.name}</div>
                        <div className={styles.triangle} />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div style={{ height: '100%', background: '#fff' }}>
            <div style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</div>
            <div style={{ width: 210, background: 'white' }}>
                {childRender(nameList)}
            </div>
        </div >
    )
}
StatusLine.propTypes = {
    title: PropTypes.any.isRequired,
    nameList: PropTypes.array.isRequired,
}
export default StatusLine;

