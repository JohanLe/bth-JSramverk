import React from 'react';
import {HeaderReports} from './Header.js';



class Report extends React.Component {

    render() {
        console.log(this.props.match);
        return (

            <article className="article">
                <div className="article_header">
                    <h2>REPORT PAGE</h2>
                    <HeaderReports/>
                </div>

                <div className="article_main_content">
                </div>

            </article>
        )
    }
}

var kmomOne= {
    questions: [
        "Github"
    ],
    answers: [
        ""
    ]

}

export default Report;