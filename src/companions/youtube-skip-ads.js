companion("Youtube ad skipper", function () {
	/**
	 *
	 */
	function check_player() {
		document.querySelectorAll("#player-container-outer").forEach((container) => {
			let video = container.querySelector("video");
			let ad_bar = container.querySelector(".ytp-ad-persistent-progress-bar-container");

			if (!(ad_bar && video)) return;

			if (RegExp(/none/i).test(ad_bar.style.display)) return;

			if (video.currentTime < video.duration - 0.5) {
				console.log("Skipped AD");
				video.playbackRate = 10;
				video.currentTime = video.duration - 0.4;
			}
		});
	}

	/**
	 *
	 */
	setInterval(function () {
		check_player();
	}, 500);
});
