function Category(props) {  
    return(
        
    <>
        <label className="m-3 p-3" style={{'backgroundColor' : '#000000' }} >
                    <input style={{'color' : '#000000'}} value={props.typeNames} onClick={ (e) =>props.setType(e.target.value)} ></input>
        </label>
    </>
)}
export default Category;