function MyCard(props){

    return(
            <div className="card border border-black bg-danger">
              <img src={props.image} className="card-img-top"/>
              <div className="card-body ">
                <h2 className="card-title text-center text-white">{props.name}</h2>
                <h5 className="card-title text-warning"><span className="text-black fs-4">price : </span>{props.price} $</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">stock : </span>{props.stock}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">brand : </span>{props.brand}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">category : </span>{props.category}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">description : </span>{props.description}</h5>
              </div>
            </div>
  )
  }
  export default MyCard