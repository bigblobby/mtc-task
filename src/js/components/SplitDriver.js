import React from 'react';

class SplitDriver extends React.Component {
    static defaultProps = {
        title: 'Title',
        subTitle: 'Some sub title text',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque id nisi quis saepe voluptatem?',
        linkUrl: '/',
        linkText: 'About Us'
    }

    render() {
        const {subTitle, title, copy, image, linkText, linkUrl} = this.props;

        return (
            <div className="split-driver">
                <div className="split-driver__image">
                    <img src={image} alt="Kitchen"/>
                </div>
                <div className="split-driver__content">
                    <div className="split-driver__body">
                        <p className="split-driver__sub-title">{subTitle}</p>
                        <h2 className="split-driver__title">{title}</h2>
                        <p className="split-driver__copy">{copy}</p>
                        <div>
                            <a className="btn btn-primary" href={linkUrl}>{linkText}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplitDriver;
