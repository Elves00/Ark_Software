import React from 'react';
import './postcontainer.css';
import BossInfo from '../boss-information/bossInfo';
import Sidebar from '../sidebar/Sidebar';

export default function PostContainer() {
    return (
        <div className="container">
            <BossInfo />
            <Sidebar />
        </div>
    );
}
