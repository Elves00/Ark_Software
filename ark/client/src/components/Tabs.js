import React from 'react';
import styles from './Tabs.module.css';
import { useState } from 'react';


const Tabs = ({ children, tier }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const handleClick = (e, newActiveTab, num) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
        //Updates a parents state to have the current tabs related number ie on tab 1 it will post the number 1
        tier(num);
    };


    return (
        <div>
            <ul className={styles.tabs}>
                {children.map((tab) => {
                    const label = tab.props.label;
                    const num = tab.props.number;
                    return (
                        <li id='list'
                            className={label == activeTab ? styles.current : ''}
                            key={label}
                        >
                            <a href="#" onClick={(e) => handleClick(e, label, num)}>
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
