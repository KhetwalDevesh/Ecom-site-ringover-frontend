import React from 'react'
import useStore from '../globalStore'
const Filters = () => {
  const {typeFilters,costFilters,addTypeFilterItem,removeTypeFilterItem} = useStore();
  console.log(typeFilters);
  function updateTypeFilter(e){
    if(e.target.innerHTML==="✓")
    {
      addTypeFilterItem({item:e.target.id});
      console.log("add");
    }
    else
    {
      console.log("add");
      removeTypeFilterItem({item:e.target.id});
    }
  }
  return (
    <div className='filter-items'>
        <span className='filter-header'>FILTER</span>
        {/* <div className='cost-filter'>
        <span className='cost-text'>Cost</span>
        <div className='cost-filter-items'>
        <label className="container">
        <button className='checkbox' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓"}}/><span>Less than ₹1500</span>
        </label>

        <label className="container">
        <button className='checkbox' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓"}}/>₹1501 - ₹4000
        </label>

        <label className="container">
        <button className='checkbox' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓"}}/>₹4001 - ₹7000
        </label>

        <label className="container">
        <button className='checkbox' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓"}}/>More than ₹7000 
        </label>

        </div>
        </div> */}

        <div className='type-filter'>
        <span className='type-text'>Type</span>
        <div className='type-filter-items'>
        <label className="container">
        <button className='checkbox' id='Sneakers' onClick={(e)=> { e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓";updateTypeFilter(e);}}/>Sneakers
        </label>

        <label className="container">
        <button className='checkbox' id='Loafers' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓";updateTypeFilter(e);console.log("inside loafers");}}/>Loafers
        </label>

        <label className="container">
        <button className='checkbox' id='Boot' onClick={(e)=> {console.log(e.target.innerHTML); e.target.innerHTML=(e.target.innerHTML)==="✓"?"":"✓";updateTypeFilter(e);}}/>Boots
        </label>

        </div>
        </div>

    </div>
  )
}

export default Filters