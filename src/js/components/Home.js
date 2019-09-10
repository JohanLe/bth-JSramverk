import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <article className="home article">
                <div className="article_header">
                    <h2>Om mig</h2>
                </div>

                <div className="article_main_content">
                    <p>
                        Mitt namn är Johan Ledel, 27år gammal. Bor I halmstad och
                        läser Webbprogrammering på BTH på Distans sedan hösten 2018.
                    </p>
                    <p>
                        När jag inte studerar eller arbetar på Clas Ohlson
                        spenderar jag mycket tid på golfbanan. Mycket
                        av min tid och planering av gym träning går till
                        att förbättra min golf även om det bara är på en hobby nivå.
                        Målet är att komma ner under 4hcp innan säsongen 2021 är över.
                    </p>
                </div>
            </article>
        )
    }
}

export default Home;