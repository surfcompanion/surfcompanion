import React, { createElement } from "react";
import { companion, copy_to_clipboard } from "../../support/core";

export default companion("rarbg.com/copy_magnet_button", function () {
	for (let manget_anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="magnet:"]')) {
		const magnet_parent = manget_anchor.closest("td,div");
		const manget_url = manget_anchor.getAttribute("href");
		const magnet_copy_button = document.createRange().createContextualFragment(`<span style="margin: 2px; cursor: pointer" class="btn btn-primary btn-mini">[ copy magnet ]</span>`).childNodes[0];

		if (!manget_url) return;

		magnet_copy_button.addEventListener("click", () => copy_to_clipboard(manget_url));

		if (manget_anchor.nextSibling) {
			manget_anchor.parentNode?.insertBefore(magnet_copy_button, manget_anchor.nextSibling);
			return;
		}

		magnet_parent?.appendChild(magnet_copy_button);
	}
});
