const getTime = () => {
    let date = new Date();
    let day = date.toDateString();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    let time = hour + ':' + minute + ':' + second + ' ';
    $('.time h4').html(time);
    $('.time h3').html(day);
    let t = setTimeout(function () {
        getTime();
    }, 1000);
};

getTime();

google.charts.load('current', {
    packages: ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'Popularity'],
        ['Banten', 200],
        ['Jawa Barat', 700],
    ]);

    var options = { region: 'ID', resolution: 'provinces' };

    var chart = new google.visualization.GeoChart(
        document.getElementById('regions_div')
    );

    chart.draw(data, options);
}

$('.section-l').load('dashboard.html');

$('#user').click(function () {
    $('.section-l').load('user.html');
});

$('#comment').click(function () {
    $('.section-l').load('comment.html');
});

$('#article').click(function () {
    $('.section-l').load('article.html');
});

$('#dashboard').click(function () {
    $('.section-l').load('dashboard.html');
    setTimeout(() => {
        google.charts.setOnLoadCallback(drawRegionsMap);
        $('#regions_div').fadeIn();
    }, 1200);
});

$('.menu').click(function () {
    $(this).toggleClass('open');
    $('.section-r').toggleClass('section-open');
    $('#regions_div').fadeToggle(function () {
        setTimeout(() => {
            $('#regions_div').fadeToggle(function () {});
            google.charts.setOnLoadCallback(drawRegionsMap);
        }, 1200);
    });
    $('.section-l').toggleClass('s');
});

$('.article-list span:not(:first-child)').addClass('mt');
$('.comment-list .list:not(:first-child)').addClass('mt');

$('.article-list span').click(function () {
    $('.article-list span').addClass('active').not(this).removeClass('active');
});

$('.fa-eye-slash').click(function () {
    $('.fa-eye-slash').addClass('fa-eye') &&
        $(this).removeClass('fa-eye-slash');
});

$('.fa-star').click(function () {
    $('.fa-star').toggleClass('unstar') &&
        $('.fa-star').not(this).toggleClass('unstar');
});
