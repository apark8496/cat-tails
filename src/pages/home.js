import React from 'react';

function Home() {

    return (
        
        <section class="hero">
            {/* insert hero through bootstrap??? WELCOME TO CAT TAILS, A TEXT ADVENTURE GAME*/}
            <div class="about-container">
                {/* about section */}
                <aside className='about'>
        
                    <p>
                        On one sleepy, mundane spring day one pet wonders further than they ever believed possible.
                        Join them and experience an epic adventure of a lifetime that is typically only ever told in fairytales.
                        Roam through mystical forest, floating islands, otherwordly caves, and
                        along the way meet new friends, search for ancient treasures, face fearsome foes, and find your way back home.
                        <br />
                        <br />
                        <br />
                        Your Journey awaits... 
                        {/* button to enter and sign up/character menu */}
                    </p>
                </aside>

                {/* section to show possible pets to pick from? */}
            </div>
        </section>
    );
}

export default Home;