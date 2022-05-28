const Button = function(){
    const styleScoped = document.createElement('style');
    const page = document.createElement('div'); 
    page.id ='btn';
    const id = `#${page.id}`;

    page.innerHTML = `
        <button id="btn">
            <h1>
                Click
            </h1>
        </button>
    `;

    styleScoped.innerHTML=`
        button${id} {
            background-color:purple;
        }
    `;

    page.appendChild(styleScoped);
    return page;
};

export default Button;