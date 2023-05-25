import { Component } from "react";
import './style.css';

class ShoppingMall extends Component{
    state = {
        shoppingData:[],
    }


    componentDidMount = () => {
        this.getShoppindData()
    }


    getShoppindData = async () => {
        const options = {
            method: "GET"
        }

        const url = "https://shopping-database1-production.up.railway.app/products";

        const response = await fetch(url,options);

        const data = await response.json();

        const allData = data.map(eachData =>({
            productId: eachData.product_id,
            title: eachData.title,
            productImage: eachData.product_image,
            rating: eachData.rating,
            price: eachData.price,
            category: eachData.category
        }));

        this.setState({shoppingData:allData});

    } 

    render(){
        // const {shoppingData} = this.state;
        return(
            <div>
                <h1>Hello...</h1>
            </div>
        )
    }
}

export default ShoppingMall;