import * as d3 from "d3";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const OurVisText = ({ data, width, height }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const container = svgRef.current.parentNode;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);
    // Clear the SVG container
    svg.selectAll("*").remove();

    const g = svg.append("g");

    const color = d3.scaleOrdinal(d3.schemePastel1);

    const links = data.links.map((d) => ({ ...d }));
    const nodes = data.nodes.map((d) => ({ ...d }));

    const link = g
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll()
      .data(links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = g
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll()
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", (d) => color(d.group));

    const text = g
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .style("fill", "#000")
      .style("font-size", "0.2rem") // Adjust font size as needed
      .text((d) => d.id);

    // Add a drag behavior.
    node.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    // Ticked function
    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 5);

      text
        .attr("x", (d) => d.x + 10) // Adjust the offset as needed
        .attr("y", (d) => d.y + 5);
    }
  }, [data, width, height]); // Add width and height as dependencies

  return <svg ref={svgRef}></svg>;
};

export default OurVisText;

OurVisText.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
