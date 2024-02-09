function MyCard(props){

    return(
            <div className="card border border-black bg-danger">
              <img src={props.image} className="card-img-top"/>
              <div className="card-body ">
                <h2 className="card-title text-center text-white">{props.name}</h2>
                <h5 className="card-title text-warning"><span className="text-black fs-4">language : </span>{props.language}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">vote_average : </span>{props.vote}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">release_date : </span>{props.date}</h5>
                <h5 className="card-title text-warning"><span className="text-black fs-4">overview : </span>{props.overview}</h5>
              </div>
            </div>
  )
  }
  export default MyCard