console.log('\'Allo \'Allo!');
$(document).ready(function(){
	$('#demosMenu').change(function(){
	  window.location.href = $(this).find('option:selected').attr('id') + '.html';
	});
	   $('#demosMenu').change(function(){
            window.location.href = $(this).find('option:selected').attr('id') + '.html';
          });
          var deleteLog = false;
          $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage'],
            menu: '#menu',
            onLeave: function(index, nextIndex, direction){
              if(deleteLog){
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
              console.log('onLeave--' + 'index: ' + index + ' nextIndex: ' + nextIndex + ' direction: ' +  direction);
            },
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
              if(deleteLog){
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + ' index:' + index + ' slideIndex:' + slideIndex +' direction:' + direction + ' nextSlideIndex:' + nextSlideIndex + '</p>');
              console.log('onSlideLeave--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideIndex: ' + slideIndex + ' direction: ' + direction);
            },
            afterRender: function(){
              $('#callbacksDiv').append('<p>afterRender</p>');
              console.log('afterRender');
            },
            afterResize: function(){
              $('#callbacksDiv').append('<p>afterResize</p>');
              console.log('afterResize');
            },
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
              $('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + ' index:' + index + ' slideAnchor:' + slideAnchor +' slideIndex:' + slideIndex + '</p>');
              deleteLog = true;
              console.log('afterSlideLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideAnchor: ' + slideAnchor + ' slideIndex: ' + slideIndex);
              console.log('----------------');
            },
            afterLoad: function(anchorLink, index){
              $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + ' index:' + index + '</p>');
              deleteLog = true;
              console.log('===============');
              console.log('afterLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index );

            }

          });
				$(function () {
				    $('.tlt').textillate();
				})
});
(function(d3) {

      'use strict';


      var dataProg = [
      {label: 'Photoshop', count: 40},
      {label: 'Illustrator', count: 30},
      {label: 'Premiere', count: 10},
      {label: 'InDesign', count: 5},
      {label: 'Excel', count: 15}
      ];
      var width = 360;
      var height = 360;
      var radius = Math.min(width, height) / 2;
      var donutWidth = 75;
      var legendRectSize = 18;
      var legendSpacing = 4;

      var color = d3.scaleOrdinal(d3.schemeCategory20b);

      var svg = d3.select('#chart3')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
          ',' + (height / 2) + ')');

      var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

      var pie = d3.pie()
        .value(function(d) { return d.count; })
        .sort(null);

      var path = svg.selectAll('path')
        .data(pie(dataProg))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) {
          return color(d.data.label);
        });

      var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
          var height = legendRectSize + legendSpacing;
          var offset =  height * color.domain().length / 2;
          var horz = -2 * legendRectSize;
          var vert = i * height - offset;
          return 'translate(' + horz + ',' + vert + ')';
        });

      legend.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', color)
        .style('stroke', color);
      legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(function(d) { return d; });

    'use strict';

    var dataFrame = [
    {label: 'Materialize', count: 45},
    {label: 'Bootstrap', count: 25},
    {label: 'Wordpress', count: 30}
    ];
    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;
    var legendRectSize = 18;
    var legendSpacing = 4;

    var color = d3.scaleOrdinal(d3.schemeCategory20b);

    var svg = d3.select('#chart2')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    var arc = d3.arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function(d) { return d.count; })
      .sort(null);

    var path = svg.selectAll('path')
      .data(pie(dataFrame))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return color(d.data.label);
      });

    var legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        var height = legendRectSize + legendSpacing;
        var offset =  height * color.domain().length / 2;
        var horz = -2 * legendRectSize;
        var vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      });

    legend.append('rect')
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', color)
      .style('stroke', color);
    legend.append('text')
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize - legendSpacing)
      .text(function(d) { return d; });

        'use strict';

        var dataCode = [
          { label: 'HTML', count: 30 },
          { label: 'CSS', count: 30 },
          { label: 'JavaScript', count: 25 },
          { label: 'PHP/MySQL', count: 15 }
        ];
        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;
        var donutWidth = 75;
        var legendRectSize = 18;
        var legendSpacing = 4;

        var color = d3.scaleOrdinal(d3.schemeCategory20b);

        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

        var arc = d3.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.pie()
          .value(function(d) { return d.count; })
          .sort(null);

        var path = svg.selectAll('path')
          .data(pie(dataCode))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) {
            return color(d.data.label);
          });

        var legend = svg.selectAll('.legend')
          .data(color.domain())
          .enter()
          .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = -2 * legendRectSize;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
          });

        legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .style('fill', color)
          .style('stroke', color);
        legend.append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', legendRectSize - legendSpacing)
          .text(function(d) { return d; });

      })(window.d3);
