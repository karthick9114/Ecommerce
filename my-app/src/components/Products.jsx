
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import TopBar from '../TopBar';

const Products = () => {
    const [list,setList] =useState([]);
    const [categories, setCategories] = useState(["select"]);
    const [selectedCategory,setSelectedCategory] = useState("select");
    const [filteredProducts,setFilteredProducts] = useState([]);
    const [submittedQuery, setSubmittedQuery] = useState("");
    useEffect(()=>{
            fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
            .then((res)=>{
                   return res.json();     
            })
            .then((json)=>{
                const uniqueCategories = ["select",...new Set(json.map(item => item.category))];
                setCategories(uniqueCategories);
                setList(json);
                setFilteredProducts(json)
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])
    list.forEach((element) => {
        if(!categories.includes(element.category)){
            categories.push(element.category)
        }
        
    });
    console.log(categories)
    useEffect(() => {
        let filtered = list;
    
        if (selectedCategory !== "select") {
          filtered = filtered.filter((item) => item.category === selectedCategory);
        }
    
        if (submittedQuery !== "") {
          filtered = filtered.filter((item) =>
            item.title.toLowerCase().includes(submittedQuery.toLowerCase())
          );
        }
    
        setFilteredProducts(filtered);
      }, [selectedCategory, submittedQuery, list]);
    

  return (
    <>
    <TopBar categories={categories} setSelectedCategory={setSelectedCategory} setSubmittedQuery={setSubmittedQuery}/>
    <div className='product-list'>
    {
        filteredProducts.map((product,index)=>{
            return <ProductCard key={index}products={product}/>
        })
    }
      </div>
    </>
  )
}

export default Products
