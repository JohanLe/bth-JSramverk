import React from 'react';

class ReportQuestion extends React.Component {
    render() {
        return (
            <div className="question_input_container">
                <label >
                    Question
                    <textarea
                        id={this.props.index}
                        name={"question"}
                        type="textarea"
                        onChange={this.props.triggerQuestion}
                        defaultValue={this.props.question}

                    />
                </label>
                <label>
                    Answer
                    <textarea
                        id={this.props.index}
                        name={"answer"}
                        type="textarea"
                        onChange={this.props.triggerAnswer}
                        defaultValue={this.props.answer}
                    />
                </label>
            </div>

        )
    }
}


export default ReportQuestion;