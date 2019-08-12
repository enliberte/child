https://codesandbox.io/s/react-context-api-vo5j0
  import React, {Component, Children, createElement} from "react";


  const Header = (props) => null

  const Column = (props) => null

  const Divider = (props) => null

  const Body = (props) => null

  class Table extends Component {
    renderChild(componentName) {
      switch(componentName) {
        case 'Header':
          return <thead></thead>
        case 'Body':
          return <tbody></tbody>  
        case 'Column':
          return <tr></tr>
        default:
          console.log('Неопознанный элемент');  
      }
    }
    renderChildren(node) {
      let tree = [];
      Children.map(node.props.children, child => {
        if (child.props.children) {
          tree = [...tree, ...this.renderChildren(child)];
        } else {
          const newChildComponent = this.renderChild(child.type.name);
          return newChildComponent;
        }
      })
      return tree;
    }
    render() {
      return (
          <table>
            {this.renderChildren(this)}
          </table>
      )
    }
  }


  class App extends Component {


    render() {
      const data = [
        [1,2,3],
        [],
        [],
      ]

      return (
        <div>
          <Table>
            <Header>
              <Column/>
              <Column/>
              <Column/>
            </Header>
            <Body>
              <Column/>
              <Column/>
              <Column/>
            </Body>         
          </Table>
        </div>
        
      );
    }
  }

  export default App;