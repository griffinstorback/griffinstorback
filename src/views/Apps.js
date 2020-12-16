import Main from '../layout/Main';

import React from 'react';

import Cell from '../components/Apps/Cell.js';
import data from '../data/apps.js';

function Apps() {
    return (
        <Main>
            <article className="post" id="apps">
                <header>
                    <div className="title">
                        <h2>Apps</h2>
                        <p>Apps I have created and published to the App Store.</p>
                    </div>
                </header>
                {data.map((project) => (
                    <Cell
                        data={project}
                        key={project.title}
                    />
                ))}
            </article>
        </Main>
    )
}

export default Apps;