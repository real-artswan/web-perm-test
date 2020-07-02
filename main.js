window.onload = () => {
	main().then(() => console.log('finished'));
};

async function main() {
	const ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
	const draw = function (video, dt) {
		ctx.drawImage(video, 0, 0)
	}
	const myCamvas = new camvas(ctx, draw);
}