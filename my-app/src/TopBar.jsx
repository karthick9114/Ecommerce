import { useState } from 'react'

const TopBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
      props.setSubmittedQuery(searchQuery);
  };
  return (
    <div className='topbar'>
        <select name="" id="" onChange={(e)=> props.setSelectedCategory(e.target.value)}>
            {
                props.categories.map((category)=>(
                    <option value={category} key={category}>{category}</option>
                ))
            }
        </select>
        <input type="text" onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Search by title" value={searchQuery}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TopBar
