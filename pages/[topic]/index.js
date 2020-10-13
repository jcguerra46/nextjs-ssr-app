import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head';

/** Components */
import Container from '../../components/container';
import Articles from '../../components/articles';

class Home extends Component {

    state = {
        news: this.props.articles,
        keywords: '',
        newsFiltered: []
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        this.setState({ keywords });
        let newsFiltered = this.state.news.filter((item) => {
            return item.headlines.basic.indexOf(keywords) > -1;
        })
        this.setState({ newsFiltered });
    }

    renderArticles = () => {
        let keywords = this.state.keywords;
        let newsFullData = this.state.news;
        let newsFiltered = this.state.newsFiltered;
        console.log(newsFiltered);
        if(keywords != '' && newsFiltered.length === 0){
            return (
                <div>Por {keywords}, no se encuentra articulo.</div>
            )
        } else {
            let articles = newsFiltered.length === 0 ? newsFullData : newsFiltered;
            <Articles articles={articles} />
        } 
    }

    render() {
        return (
            <Container keywords={this.getKeywords}>
                <Head>
                    <title>Next.js SSR APP | Test La Nación</title>
                </Head>
                
                <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                    {this.renderArticles()}
                </section>
                <section className="row">
                    <div className="col-12 hlp-text-center hlp-margintop-40">
                        <button className="--btn --secondary">MÁS NOTAS DE ACUMULADO GRILLA</button>
                    </div>
                </section>
            </Container>
        )
    }
}

export const getServerSideProps = async ({ query }) => {
    const { articleId } = query;

    try {
        const response = await axios.get('https://api-test-ln.herokuapp.com/articles')
        let articles = await filterSubtitle(response.data);
        return {
            props: {
                articles
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
        if (item.subtype == "7") {
            articles.push(item);
        }
    });
    return articles;
}

export default Home;