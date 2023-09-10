import { useActionData } from "react-router";
import Pagina from "../../components/template/Pagina";

export default function Exibir() {
	const { ok, nome, idade }: any = useActionData();

	return (
		<Pagina titulo="Dados inseridos no formulário">
			{ok ? (
				<p className="text-xl my-10">
					{nome} tem {idade} anos
				</p>
			) : (
				<p className="text-xl my-10">Houve um problema</p>
			)}
		</Pagina>
	);
}

export async function actionFormulario({ request }) {
	// window.alert("Olá");
	const dadosFormulario = await request.formData();
	const dadosParaSalvar = {
		nome: dadosFormulario.get("nome"),
		idade: dadosFormulario.get("idade"),
	};
	const resposta = salvar(dadosParaSalvar);
	return resposta;
}

function salvar(dados) {
	const dadosFinais = {
		nome: !!dados.nome ? dados.nome : "desconhecido",
		idade: dados.idade,
	};
	//salvamos no banco aqui
	return { ok: true, ...dadosFinais };
}
