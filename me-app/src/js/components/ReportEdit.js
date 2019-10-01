import React from 'react';
import ReportQuestion from './ReportQuestion.js';

class ReportEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kmom: this.props.match.params.kmom,
            reportData: [],
            editFields: [],
        };
        this.getReport();
    
    }

    getReport = () => {
        fetch("http://localhost:8333/reports/" + this.state.kmom, {
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
                var data = parsed.map((item, index) => {
                    item['id'] = index;
                    return item;
                });
                this.setState({reportData: data});
                this.state.editFields = this.createReportQuestion(data);
                
            }
     
        });
    };
    postReport = (data) => {

        fetch("http://localhost:8333/reports", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                kmom: this.state.kmom,
                data: data,
                token: localStorage.getItem('jwt')
            })
        }).then((res) => {
            return (res.json());

        }).then((res) => {
            console.log(res);
            if(res.data.status == 'ok'){
                var url = '/reports/week/' + this.state.kmom;
                window.location.replace(url);
            }
        })

    };

    createReportQuestion = (data) => {
        var questions = data.map((item, index) => {
            return (
                <ReportQuestion
                    key={index}
                    index={item.id}
                    question={item.question}
                    answer={item.answer}
                    triggerQuestion={this.handleOnChange}
                    triggerAnswer={this.handleOnChange}
                />
            );
        });
        var newData = this.state.editFields;
        newData.push(questions);
        this.setState({editFields: newData});
    };
    addQuestion = (event) => {
        if (event) {
            event.preventDefault();
        }
        var item  = {id:(this.state.reportData.length), question: "New", answer: "New"};
        this.createReportQuestion([item]);
        var newState = this.state.reportData;
        newState.push(item);
        this.setState({reportData: newState});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.postReport(JSON.stringify(this.state.reportData));
    };

    handleOnChange = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        let id = event.target.id;
        var state = this.state.reportData;
        var newState = [];
        state.forEach((item)=>{
            if(item.id == id){
                item[nam] = val;
            }
            newState.push(item);

        });
        this.setState({reportData: newState});
    };


    render() {
        return (
            <div className="edit_report_container">

                <form className="edit-question-form" onSubmit={this.handleSubmit}>
                    <div>
                        {this.state.editFields}
                    </div>
                    <button onClick={this.addQuestion}>Add question</button>
                    <input type="submit" value="Spara"/>
                </form>

            </div>

        )
    }
}

export default ReportEdit;