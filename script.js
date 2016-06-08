var two;

function createRndGraph() {
    var points = [];
    var max = 50;
    var coeff = window.innerWidth / max;
    var i = 0;
    while (i < window.innerWidth) {
        points.push({
            x: i,
            y: getRandomArbitary(0, window.innerHeight)
        });
        i += coeff;
    }
    return points;
}

function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}

function render() {
    two.clear();
    requestAnimationFrame(render);
    var points = createRndGraph();
    points.map(function (point, i) {
        if (i === 0) {
            two.makeLine(0, 0, point.x, point.y);
        } else {
            two.makeLine(points[i - 1].x, points[i - 1].y, point.x, point.y);
        }
    });
    two.update();
}

window.onload = function () {
    var elem = document.getElementById('draw-shapes');
    var params = {fullscreen: true, type: Two.Types.canvas};
    two = new Two(params).appendTo(elem);
    render();
};