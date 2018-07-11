class Loader {
	private registry: {[key: string]: boolean} = {};
	public static instance: Loader = new Loader();

	public static getInstance = (): Loader => Loader.instance;

	public loadIconPack = (source: string, async: boolean = true) => {
		if (typeof document === "undefined") return;

		const packs = Array.from(document.querySelectorAll(`.order-icon-pack`));
		const downloaded = packs.some((pack) => (pack as HTMLDivElement).dataset.source === source);

		if (!downloaded && !this.registry[source]) {
			this.registry[source] = true;
			const xhr = new XMLHttpRequest();
			xhr.open("GET", source, async);
			xhr.send();
			xhr.onload = () => {
				const pack = document.createElement("div");
				pack.setAttribute('class', `order-icon-pack`);
				pack.dataset.source = source;
				pack.setAttribute('style', 'position:fixed;top:-9px;left:-9px;width:1px;height:1px;overflow:hidden');
				pack.innerHTML = xhr.responseText;
				document.body.insertBefore(pack, document.body.childNodes[0]);
			};
		}
	}
}

export default Loader;