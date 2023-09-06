import { json, Route } from "react-router";
import Editar from "../pages/usandoLoaderDeOutraRota/editar";
import Exibir from "../pages/usandoLoaderDeOutraRota/exibir";

function dadosLoader() {
	return json({ nome: "Marcos", idade: 12 } as any, { status: 200 });
}

const rotas = (
	<Route path="usandoLoaderDeOutraRota" id="loaderRotaPai" loader={dadosLoader}>
		<Route index element={<Exibir />} />
		<Route path="editar" element={<Editar />} />
	</Route>
);

export default rotas;
