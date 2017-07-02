import React from 'react';
import GuessForm from './guess-form';
import {connect} from 'react-redux';

import './guess-section.css';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
        </section>
    );
}

const mapStateToProps = state => ({
	feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);