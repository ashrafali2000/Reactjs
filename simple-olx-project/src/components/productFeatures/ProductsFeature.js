import Cards from "../cards/Cards";
import "./ProductsFeature.css"
export default function ProductFeature(){
    const ProductFeature = [
        {id: 1,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://media.gettyimages.com/id/1365576506/photo/couple-on-road-trip-standing-by-the-car.jpg?s=612x612&w=gi&k=20&c=o_LSdKt1PZEDAl7fryWwzciBnwO7ISLSce8ra7JOGLw="},
        {id: 2,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://media.gettyimages.com/id/153989337/photo/smiling-salesman-shaking-man%C3%B5s-hand-in-car-dealership-showroom.jpg?s=612x612&w=gi&k=20&c=XKsCBnsYmUM8Uak2VoFcwfUMIN3X2cuH30EJbTEUQf4="},
        {id: 3,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://media.gettyimages.com/id/108359692/photo/salesman-leaning-on-new-car-in-showroom.jpg?s=612x612&w=gi&k=20&c=OWKqCNIZaL7IkxISrzyXYaftPdTy0AEwalcFvQ9l-U0="},
        {id: 4,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://i.pinimg.com/originals/14/d7/fe/14d7fe90dfbbcdcd435973a87c6face5.jpg"},
        {id: 5,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://shabiba.eu-central-1.linodeobjects.com/2022/05/1652776227-1652776227-jfhglbcz6nq7.jpg"},
        {id: 6,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://www.benzinsider.com/wp-content/uploads/2017/11/selling-mercedes.jpg"},
        {id: 7,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://nordicsupercar.com/wp-content/uploads/2018/11/Used-Cars-The-Best-Alternative.jpg"},
        {id: 8,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://i0.wp.com/dealersjournal.com/wp-content/uploads/2020/11/12-Dealership-Slang-Terms-You-Should-Know.png?fit=630%2C329&ssl=1"},
        {id: 9,title:"Checking and fullfill the requriements", description:"According to your criteria we provide the policy and security", src:"https://t4.ftcdn.net/jpg/02/80/39/49/360_F_280394990_f8A9aRWK1ralE9iIdm9vxPr2q7msGzFm.jpg"}
    ]
    return (

        <div className="ProductFeature">
            {ProductFeature.map(item => <Cards key={item.id} img = {item.src} title = {item.title} description = {item.description}></Cards>)}
        </div>
    )
}