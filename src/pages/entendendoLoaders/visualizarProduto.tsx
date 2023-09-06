import { Link, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function VisualizarProduto() {
	const { title, description, price }: any = useLoaderData();
	// const title = "produto";
	// const description = "produto legal";
	// const price = "1.99";
	return (
		<Pagina titulo={title}>
			<p className="w-full m-2 text-center overflow-w-auto max-h-48">
				{description}
			</p>
			<p className="text-bolder text-center m-2">R${price}</p>
			<button
				className={`bg-zinc-700 text-white p-2 w-full
                                rounded-md hover:bg-orange-500`}
			>
				<Link to="..">Voltar</Link>
			</button>
		</Pagina>
	);
}

export async function pegaProduto({ params }) {
	const dados = await fetch(`https://fakestoreapi.com/products/${params.id}`);
	// const dadosJson = await dados.json();
	// console.log(dadosJson)
	return dados;
}
