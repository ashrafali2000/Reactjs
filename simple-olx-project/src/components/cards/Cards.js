import { Card } from "antd";
import "./Cards.css"
export default function Cards({img,title, description}) {
 
    return (
        <div>
            <Card className="Cards">
                <img className="cardImg"
                    alt="example"
                    src={img}
                />
           <h1>{title}</h1>
           {description}
            </Card>
        </div>
    )
}