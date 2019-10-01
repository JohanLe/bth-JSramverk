import React from 'react';
import {HeaderReports} from './Header.js';
import Link from "./Link";


class Report extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            report: [],
            kmom: this.props.match.params.kmom,
        }
        
    }
    getReport = () => {
        var kmom = this.props.match.params.kmom
        fetch("http://localhost:8333/reports/" + kmom, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            return res.json();
        }).then(async (res) => {
            if(res.data){
               var parsed = JSON.parse(res.data.text);
                this.setState({report: parsed});
            }
            else {
                this.setState({report: [{"question":"Press edit to create new report"}]});
            }
        });
    };
    componentDidMount(){
        this.getReport();
    }
    componentDidUpdate(prevProps) {
        
        if(prevProps.match.params.kmom !== this.props.match.params.kmom){
            this.getReport();
        }
        
    }
    render() {
        
        const kmom = this.props.match.params.kmom;
        const editUrl = "/reports/edit/"+kmom;
        var questions = this.state.report;

        const QuestionsList = () =>
            questions.map((question, index) => (
                <div className="question" key={index}>
                    <p>
                        <strong>{question.question}</strong>
                    </p>
                    <p>{question.answer}</p>
                </div>
            ));

        return (
            <article className="article">
                <div className="article_header">
                    <h2>REPORTS</h2>
                    <HeaderReports/>
                    <Link url={editUrl} text="Edit report" className="report_week_link"/>
                </div>

                <div className="article_main_content">
                    <QuestionsList/>
                </div>

            </article>
        )
    }
}


export default Report;