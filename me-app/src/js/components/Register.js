import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullname: "",
            birthdate: '',
            errorMessage: false,
        };

    }

    validateYear = (date) => {
        if (isNaN(date)) {
            this.setState({errorMessage: "Not a number"});
            return false
        }
        if (date.length < 4) {
            return false
        }
        this.setState({errorMessage: false});
        return true;
    };
    validateMonth = (date) => {
      //  var year = date.slice(0, 4);
        var month = date.slice(-2);

        if (isNaN(month)) {
            this.setState({errorMessage: "Not a number"});
            return false
        }
        if (date.length < 7) {
            return false
        }
        this.setState({errorMessage: false});
        return true;
    };
    validateDay = (date) => {
       // var year = date.slice(0, 4);
        var month = date.slice(5, 7);
       // var day = date.slice(-2);

        if (isNaN(month)) {
            this.setState({errorMessage: "Not a number"});
            return false
        }

        this.setState({errorMessage: false});
        return true;
    };

    validateBirthdate = (event) => {
        var date = event.target.value;
        /*
         * If erase, do nothing.
         * After 4 & 7 digits, add -
         * Check how many days the months has and se if entered days is OK.
         */
        if (date.length < this.state.birthdate.length) {
            // if erase, do nothing.
        } else if (date.length < 5 && this.validateYear(date)) {
            date += "-";
        } else if (5 < date.length && date.length < 8 && this.validateMonth(date)) {
            date += "-";
        } else if (date.length > 7) {
            this.validateDay(date)
        }
        this.setState({birthdate: date});

    };

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8333/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: this.state.fullname,
                email: this.state.email,
                password: this.state.password,
                birthdate: this.state.birthdate
            })
        });
    };

    render() {
        return (
            <div className="register_container">
                <form className="form_register" method="post" onSubmit={this.handleSubmit}>
                    <label className="input_label">
                        Name
                        <input
                            required
                            name="fullname"
                            type="text"
                            onChange={this.changeHandler}
                        />
                    </label>

                    <label className="input_label">
                        Email
                        <input
                            required
                            name="email"
                            type="email"
                            onChange={this.changeHandler}
                        />
                    </label>

                    <label className="input_label">
                        Password
                        <input
                            required
                            name="password"
                            type="password"
                            onChange={this.changeHandler}
                        />
                    </label>

                    <div className="date_picker_container">

                        <label className="input_label">
                            <span>Birthdate </span><span className="small_description_text">e.g. 1900-01-01 (Y-M-D)</span>
                            <input
                                required
                                type="year"
                                name="birthdate"
                                value={this.state.birthdate}
                                onChange={this.validateBirthdate}
                                maxLength="10"
                            />
                            <p className="error_message">{this.state.errorMessage} </p>
                        </label>
                    </div>
                    <div className="terms_and_conditions_text">
                        <label>
                            I accept <a href="/register" onClick={openTermAndConditions} className="form_link"> Terms
                            and Conditions</a>
                        </label>
                        <input name="gdpr" required type="checkbox"/>
                    </div>


                    <input name="register" type="Submit" defaultValue="Register" className="button_submit"/>

                </form>
            </div>
        )
    }
}

/*
 * Return number of days a month has.
 * @ month 01-12 string.
 * @ year string as number

function numberOfDays(month, year) {
    var mon = month % 2;
    if (month === '02') {
        if (calculateLeapYear(year)) {
            return 29;
        }
        return 28;
    } else if (mon === 0 || month === '07') {
        return 31;
    }
    return 30;
}

function calculateLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        }
        return true;
    }
    return false;
}


 */



function openTermAndConditions(event) {
    console.log("Term and conditions");
    event.preventDefault();
}

export default Register;