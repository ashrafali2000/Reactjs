import { Card } from "antd";

export default function AllProductsCard({img}){
    return (
        <div>
            <Card>
                <img src={img} alt="images" width={250} height={250}></img>
            </Card>
        </div>
    )
}