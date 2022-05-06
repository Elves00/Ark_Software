import React from 'react';
import styles from './Tabs.module.css';
import { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div>
            <ul className={styles.tabs}>
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li
                            className={label == activeTab ? styles.current : ''}
                            key={label}
                        >
                            <a href="#" onClick={(e) => handleClick(e, label)}>
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {children.map((child) => {
                if (child.props.label == activeTab)
                    return (
                        <div key={child.props.label} classname={styles.content}>
                            {child.props.children}
                        </div>
                    );
            })}
        </div>
    );
};

export default Tabs;
