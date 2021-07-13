import { companion } from "../support/core";

export default companion("Instagram remove scroll block", function () {
	/**
	 *
	 */
	function check() {
		let body = document.body;

		if (body && body.style.overflow.match(/hidden/i)) {
			let modal_container = document.querySelectorAll(".RnEpo._Yhr4");

			modal_container.forEach((e) => {
				e.remove();
			});

			Array.from<HTMLElement>(body.children as any).forEach((element) => {
				let click_sink = [element.style.position.match(/fixed/i), element.style.pointerEvents.match(/none/i), (element.style as any).contain.match(/strict/i)].reduce((v) => v && v, true);
				if (click_sink) {
					element.remove();
				}
			});

			body.style.overflow = "";
		}
	}

	/**
	 *
	 */
	setInterval(() => check(), 420);
});
