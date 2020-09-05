import React, { Component } from 'react';
import Categories from '../components/Categories'
import ProdByCateContainer from './prodByCateContainer'

class CategoriesContainer extends Component {

    state = {
        categories: []
      };
    componentDidMount() {
        const {categoryid} = this.props;
        fetch('http://localhost:3000/api/ormarket/categories/'+categoryid)
            .then(res => res.json())
            .then((data) => {
                this.setState({ categories: data })
            })
            .catch(console.log)
      }

      render () {
        return (
              <div>                
              <center><h1>Categories</h1></center>
              {this.state.categories.map((category) => (
                <div>
                <Categories name={category.name} description ={category.description}/>                    
                <p><ProdByCateContainer categoryid={category.categoryid} /></p>
                </div>
            ))}
            </div>
        );
      }

}
export default CategoriesContainer;