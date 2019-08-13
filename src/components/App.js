import React, {Component} from 'react';
import {Body, Column, Header, Delimiter, Table} from "./table/table";


const data = {
    'Header': [['Колонка 1', 'Колонка 2', 'Колонка 3', 'Колонка 4', 'Колонка 5']],
    'Body': [[1, 2, 3, 4, 5],
             [6, 7, 8, 9, 10]]
};

class App extends Component {
    render() {
        return (
            <div>
                <Table data={data}>
                    <Header>
                        <Column/>
                        <Column/>
                        <Delimiter />
                        <Column/>
                        <Column/>
                        <Delimiter />
                        <Column/>
                    </Header>
                    <Body>
                        <Column/>
                        <Column/>
                        <Delimiter />
                        <Column/>
                        <Column/>
                        <Delimiter />
                        <Column/>
                    </Body>
                </Table>
            </div>
        );
    }
}


export default App;