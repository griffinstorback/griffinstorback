import Main from '../layout/Main';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import about_text from '../data/about_markdown.js';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function About() {
    return (
        <Main>
            <article className="post" id="about">
                <header>
                    <div className="title">
                        <h2>About Me</h2>
                    </div>
                </header>

                <ReactMarkdown
                    source={about_text}
                    renderers={{
                        Link: LinkRenderer
                    }}
                    escapeHtml={false}
                />
            </article>
        </Main>
    )
}

export default About;