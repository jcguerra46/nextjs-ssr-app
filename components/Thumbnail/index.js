import Link from 'next/link';

const Thumbnail = ({ article, imageUrl = "https://via.placeholder.com/366x177?text=?" }) => {

    return (
        <div>
            <section className="cont-figure">
                <Link href={article.website_url}>
                    <a>
                    <picture className="content-pic picture">
                        <img 
                            src={imageUrl} 
                            className="content-img" />
                    </picture>
                    </a>
                </Link>
            </section>

            <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu"> 
                <Link href={article.website_url}>
                    <a>                               
                        <b>{ article.headlines.basic }</b> {article.promo_items.basic.subtitle}
                    </a>
                </Link>
                </h2>
                <h4 className="com-date">{ formatDate(article.display_date) }</h4>
            </div>
        </div>
    )
}

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export default Thumbnail;