import React, { Component } from 'react'
// import cn from 'classnames';

export default class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false };
    };
    toggleText = () => {
        const { isShown } = this.state;
        this.setState({ isShown: !isShown });
    };

    render() {
        const { isShown } = this.state;
        const collapseClass = isShown ? 'collapse show' : 'collapse';
        const area = isShown ? 'true' : 'false';
        return (
            <div>
                <div>
                    <p>
                        <a onClick={this.toggleText} className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false">Link with href</a>
                    </p>
                    <div className={collapseClass}>
                        <div class="card card-body">
                            collapse me
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
