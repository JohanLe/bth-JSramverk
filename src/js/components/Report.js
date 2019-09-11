import React from 'react';
import {HeaderReports} from './Header.js';


class Report extends React.Component {
    render() {
        const kmom = this.props.match.params.kmom;
        // const [questions, setQuestions] = useState([]);
        var questions = [];
        switch (kmom) {
            case "1":
                questions = kmomOne;
                break;
        }

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
                </div>

                <div className="article_main_content">
                    <QuestionsList/>
                </div>

            </article>
        )
    }
}

var kmomOne = [
    {
        question: "Starta appen", answer: "I en node miljö:" +
            "Installera Serve: \"npm install -g serve\" " +
            "Stå i me-app mappen och använd: \"serve -s build\" " +
            "Öppna webbläsaren på 'localhost:5000' eller vald port"
    },
    {question: "Installera moduler", answer: "Först installera Node med npm.\n" +
            "\n" +
            "Modulerna installers via npm och npx.\n" +
            "\n" +
            "Bootstrapa projektet med\n" +
            "\n" +
            "\"npx create-react-app my-app-name\"\n" +
            "Moduler till detta projekt\n" +
            "\n" +
            "Stå i projekt mappen & \"npm install react-router-dom --save\"\n" +
            "\"npm install -g sass\""},
    {question: "Github:", answer: "https://github.com/JohanLe/bth-ramverk1"},
    {question: "", answer: "(Behöver hitta ett sätt att formerta texten bättre)"},
];


export default Report;