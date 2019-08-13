import React, {Component, Children} from "react";
import './styles.css';


export const Header = (props) => null;

export const Column = (props) => null;

export const Delimiter = (props) => null;

export const Body = (props) => null;

class Model {
    constructor(node, data) {
        this.node = node;
        this.model = {
            Header: {data: data['Header'] || [], rows: []},
            Body: {data: data['Body'] || [], rows: []}
        }
    }
    create() {
        Children.map(this.node.props.children, parent => {
            const parentNode = parent.type.name;
            for (let i = 0; i < this.model[parentNode].data.length; i++) {
                this.model[parentNode].rows[i] = [];
                Children.map(parent.props.children, (child) => {
                            if (child.type.name === 'Column') {
                                const value = this.model[parentNode].data[i].shift();
                                if (value !== undefined) {
                                    this.model[parentNode].rows[i].push(value);
                                } else {
                                    throw new Error('Column count exceeds row size')
                                }
                    } else {
                        this.model[parentNode].rows[i].push(null);
                    }
                })
            }
        });
        return this.model;
    }
}

export class Table extends Component {
    renderNode(rows, ParentComponent) {
        const Cell = ParentComponent === 'thead' ? 'th' : 'td';
        return (
            <ParentComponent>
                {rows.map(row => <tr>{row.map(cell => cell ? <Cell>{cell}</Cell> : <Cell className='delimiter'></Cell>)}</tr>)}
            </ParentComponent>
        )
    }

    render() {
        const model = new Model(this, this.props.data).create();
        console.log(model);
        return (
            <table>
                {model.Header.rows.length > 0 && this.renderNode(model.Header.rows, 'thead')}
                {model.Body.rows.length > 0 && this.renderNode(model.Body.rows, 'tbody')}
            </table>
        )
    }
}