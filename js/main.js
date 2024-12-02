import { CATEGORIAS, PRODUTOS, SERVICOS } from "./database.js";

const chunkArray = (array, size) => {
    const chunkedArr = [];
    let index = 0;

    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }

    return chunkedArr;
}

const generateCard = (produto) => {
    const card = document.createElement('div');
    card.classList.add('card', 'text-center', 'm-2', 'w-25', 'p-2');

    const img = document.createElement('img');
    img.classList.add('card-img-top', 'w-50', 'mx-auto');
    img.src = produto.imagem;
    img.alt = produto.nome;

    const body = document.createElement('div');
    body.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-end');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = produto.nome;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.innerText = `R$ ${produto.preco.toFixed(2)}`;

    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn-primary');
    btn.href = '#';
    btn.innerText = 'Adicionar ao carrinho';

    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    return card;
}

const generateCarouselIcon = (icon, text, elem) => {
    const element = document.createElement('span');
    element.classList.add(icon);
    element.setAttribute('aria-hidden', 'true');

    const span = document.createElement('span');
    span.classList.add('visually-hidden');
    span.innerText = text;

    elem.appendChild(element);
    elem.appendChild(span);
}

const generateCarousel = (elemId, carouselId, items, itemsPerPage = 3) => {
    const content = document.getElementById(elemId);
    content.innerHTML = '';

    const carousel = document.createElement('div');
    carousel.id = carouselId;
    carousel.classList.add('carousel', 'slide', 'carousel-dark');

    const inner = document.createElement('div');
    inner.classList.add('carousel-inner');

    const chunks = chunkArray(items, itemsPerPage);
    chunks.forEach((part, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0)
            item.classList.add('active');

        const cnt = document.createElement('div');
        cnt.classList.add('d-flex', 'justify-content-center');

        part.forEach(p => {
            const card = generateCard(p);
            cnt.appendChild(card);
        });

        item.appendChild(cnt);

        inner.appendChild(item);
    })

    carousel.appendChild(inner);

    const prev = document.createElement('button');
    prev.classList.add('carousel-control-prev');
    prev.type = 'button';
    prev.setAttribute('data-bs-target', `#${carouselId}`);
    prev.setAttribute('data-bs-slide', 'prev');

    generateCarouselIcon('carousel-control-prev-icon', 'Anterior', prev);
    carousel.appendChild(prev);

    const next = document.createElement('button');
    next.classList.add('carousel-control-next');
    next.type = 'button';
    next.setAttribute('data-bs-target', `#${carouselId}`);
    next.setAttribute('data-bs-slide', 'next');

    generateCarouselIcon('carousel-control-next-icon', 'Próximo', next);
    carousel.appendChild(next);


    content.appendChild(carousel);
}

const main = () => {
    generateCarousel('carousel-frutas', 'carouselFrutas', PRODUTOS.filter(p => p.categoria_id === 1));
    generateCarousel('carousel-nao-pereciveis', 'carouselNaoPereciveis', PRODUTOS.filter(p => p.categoria_id === 2));
    generateCarousel('carousel-higiene', 'carouselHigiene', PRODUTOS.filter(p => p.categoria_id === 3));
}

document.addEventListener('DOMContentLoaded', main);