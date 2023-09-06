import { Route } from "react-router";
import Inicio from "../pages/shared/inicio";
import Pagina404 from "../pages/shared/pagina404";
import Sobre from "../pages/shared/sobre";

const links = [
	{ url: "/pagina404", text: "Início" },
	{ url: "/pagina404/sobre", text: "Sobre" },
	{ url: "/pagina404/inexistente", text: "Inexistente" },
];

const rotas = (
	<Route path="pagina404">
		<Route index element={<Inicio links={links} />} />
		<Route path="sobre" element={<Sobre links={links} />} />
		<Route path="*" element={<Pagina404 />} />
	</Route>
);

export default rotas;
