import TreeCard from './TreeCard'

// this component is the inventory page
// the data is being passed in from app.js
// use treecard component to display the data

const Inventory = (props) => {
  const display = props.data.map((tree, index) => {
    return <TreeCard tree={tree} key={index} />
  })
  return <div>{display}</div>
}

export default Inventory
