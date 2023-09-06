import { Route } from "react-router";
import Exibir, { actionFormulario } from "../pages/entendendoUseFetcher/Exibir";
import Formulario from "../pages/entendendoUseFetcher/Formulario";

const rotas = (
	<Route path="entendendoUseFetcher">
		<Route index element={<Formulario />}></Route>
		<Route path="exibir" element={<Exibir />} action={actionFormulario} />
	</Route>
);

export default rotas;
