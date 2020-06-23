import React from 'react'
import Product_Data from'./product.data.js';
import Allproducts from '../../components/allproducts/allproducts.compo';
class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
           collections: Product_Data
        };
      }

      render(){
          const {collections} = this.state //what is this
          return(
                <div>{
             
                    collections.map(({id , items,title})=>(
                        <Allproducts key={id} items={items} title={title} />
                    )) 
                 }
                </div>
          );
      }
  
}

export default Items;