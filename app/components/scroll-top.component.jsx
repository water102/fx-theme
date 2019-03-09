import React, {Component} from 'react';

class ScrollTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-none"
                data-scroll-offset={500}
                data-scroll-speed={300}>
                <i>Scroll to top</i>
            </div>
        );
    };
}

export default ScrollTop;