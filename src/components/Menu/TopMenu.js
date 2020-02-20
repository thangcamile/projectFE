import React from 'react';
export default class TopMenu extends React.Component {
    render() {
        return (
            <div className="menutop">
                <div className="_3cot">
                    <div className="menuleft">
                        <a href="!#"><div className="fa fa-list-ol" /></a>
                    </div>
                    <div className="menumid">
                        <ul className="list">
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">Market</a></li>
                            <li><a href="!#">News</a></li>
                            <li><a href="!#">Money</a></li>
                            <li><a href="!#">Books</a></li>
                            <li><a href="!#">Fruiit</a></li>
                        </ul>
                    </div>
                    <div className="menuright">
                        <div className="icon" />
                        <a href="!#"><div className="fa fa-facebook" /></a>
                        <a href="!#"><div className="fa fa-twitter" /></a>
                        <a href="!#"><div className="fa fa-instagram" /></a>
                    </div>
                </div>
            </div>
        );
    }
}
