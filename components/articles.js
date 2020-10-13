import Taxonomy from './taxonomy';
import Thumbnail from './Thumbnail';

const Articles = ({ articles }) => {

    console.log(articles);
    let tags = taxonomyTags(articles);
    
    // mostrando por consola el formato del json de los Tags
    console.log(tags);

    return (
        <section>
            <Taxonomy tags={tags} />
            {
                articles.map((article, index) => {
                    return (
                        <article key={index} className="mod-caja-nota lugares w-100-mobile">
                            <Thumbnail article={article}
                                imageUrl={(article.promo_items.basic.resized_urls.resizedUrl) || undefined}
                            />
                        </article>
                    )
                })
            }
        </section>
    )
}

/** Tags */
const taxonomyTags = async (articles) => {
    let tagsArray = [];
    // agrupando y totalizando los tags
    for (let i = 0; i < articles.length; i++) {
        let tags = articles[i].taxonomy.tags;
        tagsArray = getTags(tagsArray, tags);
    }
    // ordenamiento de mayor a menor
    tagsArray.sort((a, b) => {
        return b.count - a.count;
    })
    // mostrar los 10 primeros
    return tagsArray.splice(0, 10);
}

/** agrupando y totalizando los tags */
const getTags = (tagsArray, tags) => {
    for (let t = 0; t < tags.length; t++) {
        let tagExist = isTagExists(tagsArray, tags[t]);
        if (tagExist) {
            tagsArray.map((item) => {
                if (item.text == tags[t].text) {
                    item.count += 1;
                }
            })
        } else {
            let obj = setTag(tags[t]);
            tagsArray.push(obj);
        }
    }
    return tagsArray;
}

/** Preparando el nuevo objeto tag para insertarlo en la pila */
const setTag = (tag) => {
    let obj = {};
    obj.slug = tag.slug;
    obj.text = tag.text;
    obj.count = 1;
    return obj;
}

/** Verificando si existe el tags en la pila */
const isTagExists = (tagsArray, tag) => {
    return tagsArray.some(item => item['text'] === tag.text);
}

export default Articles;