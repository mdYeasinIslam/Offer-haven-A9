import { useEffect, useState } from "react";
import CommonHeading from "../../CommonHeading/CommonHeading";
import ArticleDetails from "./ArticleDetails";

const ArticleSection = () => {
    const [articels, setArticles] = useState([])

    useEffect(() => {
        fetch('/articelsData.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    console.log(articels)
    const heading = <div className="text-center ">
        <h1 className="font-semibold font-family text-4xl ">Latest Article </h1>
        <p>Explore article and find your favourite shop</p>
    </div>
    return (
        <section>
            <CommonHeading header={heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    articels.map((articel) => <ArticleDetails key={articel.id} article={articel}/>)
                }
            </div>
        </section>
    );
};

export default ArticleSection;