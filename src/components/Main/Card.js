import { data } from "../../helper/data";



const Card = (veri) => {
    console.log("index::", veri);
  return (
    <div className = "cards">
        <div className="title">
            <h1>{veri.title}</h1>
            <img src={veri.image} alt="" />
           
            <div className="card-over">
                <p>
                {veri.desc}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Card