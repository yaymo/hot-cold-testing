import React from 'react';
import TopNav from './top-nav';
import InfoModal from './info-modal';
import {connect} from 'react-redux';
import './header.css';

export function Header(props) {
        let infoModal;
        if (props.showInfoModal) {
            infoModal = <InfoModal />;
        }

        return (
            <header>
                <TopNav />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
};
const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);
