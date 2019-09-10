import React from 'react';
import Link from "./Link.js";

class HeaderMain extends React.Component {
    render() {
        return <header className="App-header">
            <div className="link_container">
                <Link exact url="/" text="Home" class="header_link"/>
                <Link url="/reports/week/0" text="Reports" class="header_link"/>
                <Link url="/about" text="About" class="header_link"/>
            </div>
        </header>
    }
}

class HeaderReports extends React.Component {
    render() {
        return <div className="header_reports">
            <Link url="/reports/week/1" text="Week1" className="report_week_link"/>
            <Link url="/reports/week/2" text="Week2" className="report_week_link"/>
            <Link url="/reports/week/3" text="Week3" className="report_week_link"/>
            <Link url="/reports/week/4" text="Week4" className="report_week_link"/>
            <Link url="/reports/week/5" text="Week5" className="report_week_link"/>
            <Link url="/reports/week/6" text="Week6" className="report_week_link"/>
            <Link url="/reports/week/7" text="Week7" className="report_week_link"/>
        </div>
    }
}

export {
    HeaderMain, HeaderReports
}