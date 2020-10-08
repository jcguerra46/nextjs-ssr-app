import axios from 'axios';
import Head from 'next/head';

/** Components */
import Thumbnail from '../../components/Thumbnail';
import Container from '../../components/container';
import Taxonomy from '../../components/taxonomy';

const Home = ({ articles, tags }) => {

    const renderArticles = () => {
        return articles.map((article, index) => {
            return (
                <article key={index} className="mod-caja-nota lugares w-100-mobile">
                    <Thumbnail article={article} 
                        imageUrl={(article.promo_items.basic.resized_urls.resizedUrl) || undefined}
                    />
                </article>
            )
        })
    }
    
    return (
        <Container>
            <Head>
                <title>Next.js SSR APP | Test La Nación</title>
            </Head>
            <Taxonomy tags={tags} />
            <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                {renderArticles()}
            </section>
            <section className="row">
                <div className="col-12 hlp-text-center hlp-margintop-40">
                    <button className="--btn --secondary">MÁS NOTAS DE ACUMULADO GRILLA</button>
                </div>
            </section>
        </Container>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { articleId } = query;

    try {
        const response = await axios.get('https://api-test-ln.herokuapp.com/articles')
    
        let articles = await filterSubtitle(response.data);
        let tags = await taxonomyTags(articles);
        // mostrando por consola el formato del json de los Tags
        console.log(tags);

        return {
            props: {
                articles: articles,
                tags: tags
            }
        }

    } catch (error) {
        return {
            props: {
              error: error.error,
            },
        };
    }
}

/** Filtrando articulos por subtype 7 */
const filterSubtitle = async (data) => {
    let articles = [];
    let res = await data['articles'].map((item) => {
        if(item.subtype == "7"){
            articles.push(item);
        }
    });
    return articles;
}

/** Tags */
const taxonomyTags = async (articles) => {
    let tagsArray = [];
    // agrupando y totalizando los tags
    for(let i = 0; i < articles.length; i++){
        let tags = articles[i].taxonomy.tags;
        tagsArray = getTags(tagsArray, tags);
    }
    // ordenamiento de mayor a menor
    tagsArray.sort((a, b) => {
        return b.count - a.count;
    })
    // mostrar los 10 primeros
    return tagsArray.splice(0,10);
}

/** agrupando y totalizando los tags */
const getTags = (tagsArray, tags) => {
    for(let t = 0; t < tags.length; t++){
        let tagExist = isTagExists(tagsArray, tags[t]);
        if(tagExist){
            tagsArray.map((item) => {
                if(item.text == tags[t].text){
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

export default Home;