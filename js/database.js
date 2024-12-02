export const CATEGORIAS = [
    { id: 1, nome: 'Frutas e Verduras' },
    { id: 2, nome: 'Produtos alimentícios não perecíveis' },
    { id: 3, nome: 'Higiene e Limpeza' },
];

export const PRODUTOS = [
    { id: 1, nome: 'Alface', categoria_id: 1, preco: 2.99, imagem: 'img/frutas-verduras/alface.jpeg' },
    { id: 2, nome: 'Caqui', categoria_id: 1, preco: 4.50, imagem: 'img/frutas-verduras/caqui.jpg' },
    { id: 3, nome: 'Carambola', categoria_id: 1, preco: 3.75, imagem: 'img/frutas-verduras/carambola.jpg' },
    { id: 4, nome: 'Couve', categoria_id: 1, preco: 2.50, imagem: 'img/frutas-verduras/couve.png' },
    { id: 5, nome: 'Azeite', categoria_id: 2, preco: 15.99, imagem: 'img/nao-pereciveis/azeite.jpeg' },
    { id: 6, nome: 'Café', categoria_id: 2, preco: 8.50, imagem: 'img/nao-pereciveis/cafe.jpeg' },
    { id: 7, nome: 'Flocão', categoria_id: 2, preco: 4.75, imagem: 'img/nao-pereciveis/flocao.png' },
    { id: 8, nome: 'Polvilho Doce', categoria_id: 2, preco: 3.50, imagem: 'img/nao-pereciveis/polvilho-doce.jpeg' },
    { id: 9, nome: 'Detergente', categoria_id: 3, preco: 3.99, imagem: 'img/higiene/detergente.jpeg' },
    { id: 10, nome: 'Limpador Multiuso', categoria_id: 3, preco: 7.50, imagem: 'img/higiene/limpador-multiuso.jpeg' },
    { id: 11, nome: 'Palha de Aço', categoria_id: 3, preco: 2.75, imagem: 'img/higiene/palha-de-aco.jpeg' },
    { id: 12, nome: 'Papel Higiênico', categoria_id: 3, preco: 5.50, imagem: 'img/higiene/papel-higienico.png' },
];

export const SERVICOS = [
    { id: 1, nome: 'Tele-entrega', descricao: 'Serviço de entrega rápida e segura diretamente na sua casa.', preco: 10.00 },
    { id: 2, nome: 'Retirada no Local', descricao: 'Faça seu pedido online e retire no nosso minimercado.', preco: 0.00 },
];
