import React from 'react';

interface CardData {
    imageURL: string;
    category: string;
    name: string;
}

const CardFeatures: React.FC<{ data: CardData }> = ({ data }) => {
    return (
        <div style={{ margin: "20px", position: "relative", overflow: "hidden", width: "400px", height: "400px", borderRadius: "20px" }}>
            <div style={{ position: "relative" }}>
                <img
                    src={data.imageURL}
                    alt="image"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                    }}
                ></div>
            </div>
            <div style={{ width: "100%", height: "100%", position: "absolute", top: "0px", color: "white", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: "400", alignSelf: "end", backgroundColor: "white", color: "black", padding: "5px 10px", borderRadius: "20px" }}>{data.category}</span>
                <h3>{data.name}</h3>
            </div>
        </div>
    );
};

export default CardFeatures;
