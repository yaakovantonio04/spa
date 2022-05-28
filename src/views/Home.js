const Home = function(){
    const page = document.createElement('div'); 

    page.innerHTML = `
        <header>
            <nav>
                <a href="#">Link</a>
            </nav>
        </header>
        <main>
            <h1>Pagina Home</h1>
        </main>
    `;

    return page;
};

export default Home;