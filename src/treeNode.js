import React, {Component} from 'react';

class TreeNode extends Component {
    constructor() {
        super();
        this.renderTree = this.renderTree.bind(this);
    }

    renderTree = (data) => {
        const nodes = data.map(item => {
            if (!item.child) {
                return <li title={item.title} key={item.key}>{item.title}</li>;
            }
            return (
                <li title={item.title} key={item.key}>
                    {item.title}
                    {this.renderTree(item.child)}
                </li>);
        });
        return <ul>{nodes}</ul>;
    };

    render() {
        return this.renderTree(this.props.data);
    }
}

export default TreeNode;
/*
export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || []
        }
    }

    markNode(data) {
        let nodes;
        if (Object.prototype.toString.call(data) === "[object Array]") {
            nodes = data.map((v) => {
                let node = (<li key={this.count++}>{v.title}</li>);
                if (v.children && v.children.length) {
                    node = (<li key={this.count++}>
                        <span>{v.title}</span>
                        {this.markNode(v.children)}
                    </li>)
                }
                return node
            })
        }
        return (
            <ul>{nodes}</ul>
        )
    }

    render() {
        this.count = 0;
        return this.markNode(this.state.data)
    }
}*/
