import { Container } from "react-bootstrap";
import CardFeatures from "./CardFeatures";
import data from "../../data/data.json"

const FeaturedList = () => (
    <Container>
    
        <h1 className="text-center mb-4 mt-4">Featured Listings</h1>
        <Container style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        {data.map((data)=>(

                <CardFeatures key={data.id}data={data} />
                ))
            }
            </Container>

    </Container>
);

export default FeaturedList;
