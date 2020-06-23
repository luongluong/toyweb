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
             
                    collections.map(({id ,...otherItemProps})=>(
                        <Allproducts key={id} {...otherItemProps} />
                    )) 
                 }
                </div>
          );
      }
  
}

export default Items;