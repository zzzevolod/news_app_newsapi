import React, { Component } from 'react';

const MY_API_ID = "f1cfd2f4b4494958ab4f677f924a06a3";
const NEWS_ENDPOINT = "https://newsapi.org/v2/";
const INIT_REQUEST = NEWS_ENDPOINT + "sources?apiKey=" + MY_API_ID;

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        }
    }

    componentDidMount() {
        fetch(INIT_REQUEST)
            .then(sources => {
                return sources.json();
            }).then(data => {
                let allSources = data.sources.slice(0, 20).map((oneSource) => {
                    return(
                        <div key={oneSource.id} className="one-source-container col-4">
                            <h3 className="source-title">{oneSource.name}</h3>
                            <p className="descr">{oneSource.description}</p>
                            <a href={oneSource.url} className="linktogo">Go to news</a>
                        </div>
                    )
                })
            this.setState({articles: allSources});
            console.log("state " + this.state.articles);
        })
    }

    render() {
        return (
            <section className="articles-sources right-section col-6 row no-gutters">
                <h2>Choose your source of news</h2>
                {this.state.articles}
            </section>
        );
    }
}

export default Articles;
