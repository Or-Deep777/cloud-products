const produtos = [
	{
		id:1,
		nome:"Notebook",
		preco:4500
	},
	{
		id:2,
		nome:"Mouse",
		preco:120
	},
	{
		id:3,
		nome:"Teclado",
		preco:250
	}
]

export default function Home(){
	return(
		<main>
			<h1>Cloud Produtos - Pedro</h1>
			<p>Catalogo de produtos</p>
			<button>Novo Produto</button>
			<section>
				{produtos.map((produto)=>(
					<div key={produto.id}>
						<h2>{produto.nome}</h2>
						<p>R${produto.preco}</p>
					</div>
				))}
			</section>
		</main>
	)
}