import React from 'react';
export default class Intro extends React.Component {
    render() {
        return (
            <div className="main1">
                <div className="ttmain">
                    <br /><br /><h3>This is Buildings</h3>
                    <p>  Maybe you don't know</p>
                </div>
                <div className="intro">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text"> {this.props.text}</p>
                            <a href="!#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.image1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a href="!#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.image2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a href="!#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.image3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a href="!#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <br />
                <br />
            </div>
        )
    }
}
